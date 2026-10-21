import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, company, service, message, source } = body;

    if (!name || (!email && !phone)) {
      return NextResponse.json(
        { success: false, error: "Name and at least one contact method (Email or Phone) are required." },
        { status: 400 }
      );
    }

    const timestamp = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "medium",
    });

    const id = "CRM-" + Math.floor(1000 + Math.random() * 9000);
    const pageUrl = req.headers.get("referer") || "https://crmdevelopment.in";

    const leadRecord = {
      id,
      timestamp,
      name: name || "",
      phone: phone || "",
      email: email || "",
      service: service || "Custom CRM Development",
      location: company || "Not specified",
      company: company || "Not specified",
      message: message || "",
      source: source || "CRM Popup Modal",
      pageUrl,
      type: "CRM",
    };

    // 1. Safe local backup storage first (<2ms, no lead lost)
    try {
      const dataDir = path.join(process.cwd(), "data");
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      const leadsFile = path.join(dataDir, "leads.json");
      let leads = [];
      if (fs.existsSync(leadsFile)) {
        const fileContent = fs.readFileSync(leadsFile, "utf-8");
        leads = JSON.parse(fileContent || "[]");
      }
      leads.unshift({ ...leadRecord, id: Date.now() });
      fs.writeFileSync(leadsFile, JSON.stringify(leads, null, 2), "utf-8");
    } catch (fsErr) {
      console.error("Error saving lead backup locally:", fsErr);
    }

    // 2. Dispatch to Google Sheets Webhook in background (non-blocking)
    // Avoids waiting 3-6 seconds for Google Apps Script serverless cold-start & redirect
    const googleSheetWebhook = 
      process.env.GOOGLE_SHEET_WEBHOOK_URL || 
      "https://script.google.com/macros/s/AKfycbz6kPgNw555NUGM33b2_rfP6pV5p8BO_CVy0cVTBThiCZPcHawhIx7r9Pv6MACju-lD/exec";

    if (googleSheetWebhook && googleSheetWebhook.startsWith("http")) {
      fetch(googleSheetWebhook, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(leadRecord),
        redirect: "follow",
      }).catch((sheetErr) => {
        console.error("Background error pushing lead to Google Sheet webhook:", sheetErr);
      });
    }

    return NextResponse.json({
      success: true,
      message: "Lead received successfully!",
    });
  } catch (error) {
    console.error("Error processing lead submission:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error occurred." },
      { status: 500 }
    );
  }
}

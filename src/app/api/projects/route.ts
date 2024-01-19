import { NextResponse } from "next/server";

export async function GET() {
    const { Client } = require('@notionhq/client');

    const notionApiKey = process.env.NOTION_API_KEY;
    const databaseId = process.env.NOTION_DATABASE_ID;

    const notion = new Client({ auth: notionApiKey });

    try {
        const response = await notion.databases.query({
            database_id: databaseId,
        });

        return NextResponse.json(response);
    } catch (error: any) {
        return NextResponse.json({ error: error.message });
    }
}

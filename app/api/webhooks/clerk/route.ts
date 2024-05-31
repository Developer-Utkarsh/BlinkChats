import { clerkClient } from "@clerk/nextjs/server";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import {WebhookEvent} from "@clerk/nextjs/server"
import { createUser } from "@/lib/actions/useraction";


import { Webhook } from 'svix'


export async function POST(req: Request) {


    const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET
}
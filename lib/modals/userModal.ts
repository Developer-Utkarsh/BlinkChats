import mongoose, { Schema, model, models } from "mongoose";

// User Schema
const UserSchema = new Schema({
	_id: { type: mongoose.Schema.Types.ObjectId, auto: true },
	email: { type: String, required: true, unique: true, index: true },
	image: { type: String },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
	conversationIds: [
		{ type: mongoose.Schema.Types.ObjectId, ref: "Conversation" },
	],
	seenMessageIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Message" }],
	messages: [{ type: mongoose.Schema.Types.ObjectId, ref: "Message" }],
	clerkId: { type: String, required: true, unique: true, index: true },
	username: { type: String, unique: true, index: true },
	firstName: { type: String },
	lastName: { type: String },
});

// Account Schema

// Conversation Schema
const ConversationSchema = new Schema({
	_id: { type: mongoose.Schema.Types.ObjectId, auto: true },
	createdAt: { type: Date, default: Date.now },
	lastMessageAt: { type: Date, default: Date.now },
	name: { type: String },
	isGroup: { type: Boolean },
	messagesIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Message" }],
	userIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

// Message Schema
const MessageSchema = new Schema({
	_id: { type: mongoose.Schema.Types.ObjectId, auto: true },
	body: { type: String },
	image: { type: String },
	createdAt: { type: Date, default: Date.now },
	seenIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
	conversationId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Conversation",
	},
	senderId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const User = models?.user || model("users", UserSchema);
const Conversation =
	models?.conversation || model("conversations", ConversationSchema);
const Message = models?.message || model("messages", MessageSchema);

export { User, Conversation, Message };

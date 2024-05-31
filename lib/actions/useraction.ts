"use server";

import User from "../modals/userModal";

import { connect } from "@/lib/db";

export async function createUser(user: any) {
	try {
		await connect();
		const newUser = await User.create(user);
		return JSON.parse(JSON.stringify(newUser));
	} catch (error) {
		console.log(error);
	}
}
export async function updateUser(id: string, user: any) {
	try {
		await connect();
		if (id) {
			const updatedUser = await User.findOneAndReplace(
				{ clerkId: id }, // Correctly match clerkId with the provided id
				user,
				{
					new: true, // Return the updated document
				},
			);
			console.log("Updated User", updatedUser);
			return JSON.parse(JSON.stringify(updatedUser));
		}
		console.log("No id found");
	} catch (error) {
		console.log(error);
	}
}

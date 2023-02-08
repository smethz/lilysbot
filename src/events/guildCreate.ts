//const database = require("../structure/database")
import { client } from '../index'
import database from '../structure/database'

// Emitted whenever the client joins a guild.

export default {
	name: "guildCreate",
	async execute(guild: any) {
		console.log(`a guild was joined: ${guild}`)
		database.set(`.guilds.${guild.id}.joinedAt`, Date())

		// cache invites
		const guildinvites = await guild.invites.fetch()
		guildinvites.map(async (invite: any) => {
			const code = invite.code
			const inviterId = invite.inviterId
			const uses = invite.uses
			database.set(`.guilds.${guild.id}.invites.${code}`, { inviterId: inviterId, uses: uses, expired: false })
		})
	},
}
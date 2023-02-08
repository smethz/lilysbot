import { ContextMenuCommandBuilder, ApplicationCommandType } from 'discord.js'
import commands from '../../structure/commands'
import { client } from '../../index'

export default {
	data: new ContextMenuCommandBuilder()
		.setName('User Information')
		.setType(ApplicationCommandType.User),
	async execute(interaction: any) {
		commands.run(interaction,
			"info", null,
			"user",
			[
				{
					name: 'target',
					type: 6,
					value: interaction.targetUser.id,
					user: await client.users.resolve(interaction.targetUser.id)
				}
			]
		)
	},
}
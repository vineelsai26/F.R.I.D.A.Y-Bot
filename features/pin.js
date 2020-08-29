module.exports.pin = function pin(ctx) {
	ctx.telegram.pinChatMessage(
		ctx.chat.id,
		ctx.message.reply_to_message.message_id
	)
}

module.exports.pinmsg = function pinmsg(ctx) {
	const msg = ctx.message.text.replace('/pinmsg ', '').trim()
	ctx.telegram
		.sendMessage(ctx.chat.id, msg)
		.then(({ message_id }) =>
			ctx.telegram.pinChatMessage(ctx.chat.id, message_id)
		)
}

module.exports.unpin = function unpin(ctx) {
	ctx.telegram.unpinChatMessage(ctx.chat.id)
}

// Generated file. Do not edit by hand.
import type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
import { BaseEndpointsSdk } from '../../../base-endpoints-sdk.ts';
import type { EndpointCaller } from '../../../shared.ts';

import { arbitraryCall } from './arbitrary-call.ts';
import { banChatMember } from './ban-chat-member.ts';
import { createChatInviteLink } from './create-chat-invite-link.ts';
import { deleteMessage } from './delete-message.ts';
import { editChatInviteLink } from './edit-chat-invite-link.ts';
import { editMessageCaption } from './edit-message-caption.ts';
import { editMessageMedia } from './edit-message-media.ts';
import { editMessageText } from './edit-message-text.ts';
import { forwardMessage } from './forward-message.ts';
import { getChatAdministrators } from './get-chat-administrators.ts';
import { getChatMemberCount } from './get-chat-member-count.ts';
import { getFile } from './get-file.ts';
import { getUpdates } from './get-updates.ts';
import { pinChatMessage } from './pin-chat-message.ts';
import { promoteChatMember } from './promote-chat-member.ts';
import { restrictChatMember } from './restrict-chat-member.ts';
import { revokeChatInviteLink } from './revoke-chat-invite-link.ts';
import { sendAudio } from './send-audio.ts';
import { sendDocument } from './send-document.ts';
import { sendInvoice } from './send-invoice.ts';
import { sendMediaGroup } from './send-media-group.ts';
import { sendMessage } from './send-message.ts';
import { sendPhoto } from './send-photo.ts';
import { sendSticker } from './send-sticker.ts';
import { sendVideo } from './send-video.ts';
import { sendVideoNote } from './send-video-note.ts';
import { sendVoice } from './send-voice.ts';
import { unpinChatMessage } from './unpin-chat-message.ts';

export type { EndpointsSdkOptions } from '../../../base-endpoints-sdk.ts';
export type { ArbitraryCallInput, ArbitraryCallOutput } from './arbitrary-call.ts';
export type { BanChatMemberInput, BanChatMemberOutput } from './ban-chat-member.ts';
export type {
	CreateChatInviteLinkInput,
	CreateChatInviteLinkOutput,
} from './create-chat-invite-link.ts';
export type { DeleteMessageInput, DeleteMessageOutput } from './delete-message.ts';
export type { EditChatInviteLinkInput, EditChatInviteLinkOutput } from './edit-chat-invite-link.ts';
export type { EditMessageCaptionInput, EditMessageCaptionOutput } from './edit-message-caption.ts';
export type { EditMessageMediaInput, EditMessageMediaOutput } from './edit-message-media.ts';
export type { EditMessageTextInput, EditMessageTextOutput } from './edit-message-text.ts';
export type { ForwardMessageInput, ForwardMessageOutput } from './forward-message.ts';
export type {
	GetChatAdministratorsInput,
	GetChatAdministratorsOutput,
} from './get-chat-administrators.ts';
export type { GetChatMemberCountInput, GetChatMemberCountOutput } from './get-chat-member-count.ts';
export type { GetFileInput, GetFileOutput } from './get-file.ts';
export type { GetUpdatesInput, GetUpdatesOutput } from './get-updates.ts';
export type { PinChatMessageInput, PinChatMessageOutput } from './pin-chat-message.ts';
export type { PromoteChatMemberInput, PromoteChatMemberOutput } from './promote-chat-member.ts';
export type { RestrictChatMemberInput, RestrictChatMemberOutput } from './restrict-chat-member.ts';
export type {
	RevokeChatInviteLinkInput,
	RevokeChatInviteLinkOutput,
} from './revoke-chat-invite-link.ts';
export type { SendAudioInput, SendAudioOutput } from './send-audio.ts';
export type { SendDocumentInput, SendDocumentOutput } from './send-document.ts';
export type { SendInvoiceInput, SendInvoiceOutput } from './send-invoice.ts';
export type { SendMediaGroupInput, SendMediaGroupOutput } from './send-media-group.ts';
export type { SendMessageInput, SendMessageOutput } from './send-message.ts';
export type { SendPhotoInput, SendPhotoOutput } from './send-photo.ts';
export type { SendStickerInput, SendStickerOutput } from './send-sticker.ts';
export type { SendVideoInput, SendVideoOutput } from './send-video.ts';
export type { SendVideoNoteInput, SendVideoNoteOutput } from './send-video-note.ts';
export type { SendVoiceInput, SendVoiceOutput } from './send-voice.ts';
export type { UnpinChatMessageInput, UnpinChatMessageOutput } from './unpin-chat-message.ts';

export const endpoints = (endpointCaller: EndpointCaller) => {
	return {
		arbitraryCall: arbitraryCall.bind({ endpointCaller }),
		banChatMember: banChatMember.bind({ endpointCaller }),
		createChatInviteLink: createChatInviteLink.bind({ endpointCaller }),
		deleteMessage: deleteMessage.bind({ endpointCaller }),
		editChatInviteLink: editChatInviteLink.bind({ endpointCaller }),
		editMessageCaption: editMessageCaption.bind({ endpointCaller }),
		editMessageMedia: editMessageMedia.bind({ endpointCaller }),
		editMessageText: editMessageText.bind({ endpointCaller }),
		forwardMessage: forwardMessage.bind({ endpointCaller }),
		getChatAdministrators: getChatAdministrators.bind({ endpointCaller }),
		getChatMemberCount: getChatMemberCount.bind({ endpointCaller }),
		getFile: getFile.bind({ endpointCaller }),
		getUpdates: getUpdates.bind({ endpointCaller }),
		pinChatMessage: pinChatMessage.bind({ endpointCaller }),
		promoteChatMember: promoteChatMember.bind({ endpointCaller }),
		restrictChatMember: restrictChatMember.bind({ endpointCaller }),
		revokeChatInviteLink: revokeChatInviteLink.bind({ endpointCaller }),
		sendAudio: sendAudio.bind({ endpointCaller }),
		sendDocument: sendDocument.bind({ endpointCaller }),
		sendInvoice: sendInvoice.bind({ endpointCaller }),
		sendMediaGroup: sendMediaGroup.bind({ endpointCaller }),
		sendMessage: sendMessage.bind({ endpointCaller }),
		sendPhoto: sendPhoto.bind({ endpointCaller }),
		sendSticker: sendSticker.bind({ endpointCaller }),
		sendVideo: sendVideo.bind({ endpointCaller }),
		sendVideoNote: sendVideoNote.bind({ endpointCaller }),
		sendVoice: sendVoice.bind({ endpointCaller }),
		unpinChatMessage: unpinChatMessage.bind({ endpointCaller }),
	};
};

export class TelegramV1Sdk extends BaseEndpointsSdk<ReturnType<typeof endpoints>> {
	constructor(options: EndpointsSdkOptions) {
		super(options, endpoints);
	}
}

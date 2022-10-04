const setMetaData = require('../../libs/set-meta-data');
const userService = require('../user/user-service');

let { dialogs } = require('../../db');

class DialogService {
  createDialog(data) {
    const newDialog = {
      ...data,
      id: dialogs[dialogs.length - 1].id + 1 || 1,
      messages: [],
    };
    dialogs.push(newDialog);

    return { newDialog };
  }

  getDialogs({ offset = 0, limit = 10, userId }) {
    const data = dialogs
      .filter(({ organizerId, participantId }) => [organizerId, participantId].includes(Number(userId)))
      .map(dialog =>
        ({
          ...dialog,
          user: userService.getUser({ id: dialog.organizerId === Number(userId) ? dialog.participantId : dialog.organizerId }),
        }))
      .slice(offset, limit);

    return setMetaData({ data, totalCount: dialogs.length });
  }

  getDialog(data) {
    const dialog = dialogs.find(({ id }) => id === Number(data.id));
    if (dialog) {
      const user = userService.getUser({ id: dialog.organizerId === Number(data.userId) ? dialog.participantId : dialog.organizerId });

      return { ...dialog, user };
    }

    return { error: 'Dialog not exist' };
  }

  deleteDialog(data) {
    dialogs = dialogs.filter(({ id }) => id !== Number(data.id))

    return true;
  }

  addMessage(data) {
    const dialog = dialogs.find(({ id }) => id === Number(data.id));

    const newMessage = {
      id: dialog.messages[dialog.messages.length - 1].id + 1 || 1,
      text: data.message,
      userId: data.userId,
    };

    dialogs.forEach(({ id }, index) => {
      if (id === Number(data.id)) {
        dialogs[index].messages.push(newMessage);
      }
    });

    return this.getDialog({ id: dialog.id });
  }
}

module.exports = new DialogService();
# SillyDuckyPins
Un piti bot discord d'auto pin :3

![discord.js](https://cdn.jsdelivr.net/gh/JMcrafter26/badges@main/src/assets/built-with/discord-js/cozy.svg)

| [EN / English](./README_FR.md) | [FR / Français](./README_FR.md) |
| --- | --- |

## Setup
**Ce dont y a besoin :D** :
- Un bot discord (voir [Discord Bot](#bot-discord))
- Node.js (voir [ici](https://nodejs.org/en/download) pour le télécharger si besoin)

### Cloner le repo
Commencer par clone le repo là où vous comptez run le bot avec :

`git clone https://github.com/LukeyWookey/SillyDuckyPins.git`

Ou en téléchargeant le [zip](https://github.com/LukeyWookey/SillyDuckyPins/archive/refs/heads/master.zip) & en le dézippant.

### Bot Discord
> [!NOTE]
>
> Si vous avez déjà un Bot Discord & son token, pas besoin de lire [Creating Steps](#comment-créer-le-bot-d) :3
>
> Si votre bot est pas dans le server ou si vous êtes pas sûr d'avoir set les bonnes permissions, lire [Invite Steps](#inviter-le-bot) :D

#### Comment créer le bot :D
Aller sur [Discord's dev portal](https://discord.com/developers/applications), se login, et clicker sur "**New Application**", nommer le bot, accepter le ToS et clicker sur "**Create**".

Clicker sur "**Bot**", dans la sidebar à gauche.

Scroll en bas jusqu'a "**Token**" et clicker sur "**Reset Token**", puis clicker sur "**Yes, do it!**", verifier avec votre mdp ou sur votre app de 2FA, puis clicker sur "**Submit**".

Le token du bot devrait alors apparaître, clicker sur "**Copy**" et l'écrire qq part.

#### Inviter le bot
Clicker sur "**Installation**", dans la sidebar à gauche.

Vous pouvez disable "**User Install**" dans  **Installations Contexts** car le bot ne sera pas utile en DM, mais c'est pas nécessaire.

Scroll en bas jusqu'a **Default Install Settings**

Clicker sur l'input de texte en dessous de "**Scopes**", dans "**Guild Install**".

Ajouter "**bot**"

Dans l'input de texte en dessous de "**Permissions**", ajouter :
- "**Pin Messages**"
- "**Read Message History**"
- "**View Channels**"

Scroll en haut jusqu'a "**Install Link**" et copier le lien.

Ouvrir le lien & inviter le bot dans votre server.

### Obtenir l'ID de votre channel
Vous aurez besoin de l'ID de votre channel dans lequel vous voulez auto pin les messages

Si vous avez déjà Developper Mode d'activé, vous avez juste à clic droit le channel et clicker sur "**Copy Channel ID**" puis l'écrire qq part.

Si vous n'avez pas Developper Mode d'activé, vous pouvez l'activer dans :
**Settings** -> **Developer** -> **Developer Mode**
### Faire le.env
Copier le `example.env` et le renommer en "**`.env`**".

A droite de "TOKEN = ", paste le token écris précédemment.

A droite de "AUTOPIN_CHANNEL_ID = ", paste l'ID du channel écris précédemment.

### Installer les packages nécéssaires

En supposant que vous avez déjà Node.JS,

Run `npm i`

Attendre que les packages s'installent.

Une fois que les packages ont finis de s'installer, run `node index.js` :D

Le bot devrait run maintenant :3

## Run le bot

Juste à faire `node index.js` :3
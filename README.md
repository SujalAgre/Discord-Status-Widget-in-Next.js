# [Discord Status Widget in Next.js](https://discord-status-widget-in-next-js.vercel.app/)
This guide will help you integrate a dynamic Discord status widget into your Next.js project.

### Step 1: Create the Discord Status Component
1. Create a folder named `components` in your project folder if it doesn't exist.
2. Inside the `components` folder, create a file named `DiscordStatus.js`.
3. Copy the code for the Discord Status component from [this link](https://github.com/SujalAgre/Discord-Status-Widget-in-Next.js/blob/main/components/DiscordStatus.js) and paste it into `DiscordStatus.js`.

### Step 2: Add Status Images
1. Create a folder named `public` in your project root if it doesn't exist.
2. Inside the `public` folder, create a subfolder named `status`.
3. Download the status images from [this folder](https://github.com/SujalAgre/Discord-Status-Widget-in-Next.js/tree/main/public/status) and place them in the `public/status` folder.

### Step 3: Get Your Discord User ID
To display your own Discord status, you need to use your Discord user ID:

1. Enable Developer Mode in Discord:
   
   <img src="https://support.discord.com/hc/article_attachments/22015896495255" width="60%">

2. Right-click on your profile in a Discord chat and copy your user ID:
   
   ![Copy User ID](https://support.discord.com/hc/article_attachments/22015896535959)
   
### Step 4: Join the Lanyard API Discord Server
To get your Discord status information, we are using the Lanyard API. For the widget to show your own status [Join this Discord server](https://discord.gg/UrXF2cfJ7F) and your discord data will be visible at `https://api.lanyard.rest/v1/users/[your_id_here]`

> Learn more about the [Lanyard API](https://github.com/Phineas/lanyard).

### Step 5: Update the User ID in the Component
Open the `DiscordStatus.js` file and replace the user ID in the fetch URL with your own:

![Update User ID](https://i.imgur.com/Xk7jt8f.png)

### Step 6: Import and Use the Discord Status Component
1. In the file where you want to display the widget (e.g., `app/page.js`), import the `DiscordStatus` component:
   ```javascript
   import DiscordStatus from '@/components/DiscordStatus';
   ```
2. Add the `DiscordStatus` component in your JSX:
   ```jsx
   <DiscordStatus />
   ```
   Here's an example of how to integrate it:
   
   ![Add Discord Status Widget](https://i.imgur.com/CgohqUd.png)

### Result
After following these steps, your Discord status widget should be integrated and look similar to this:

<img src="https://i.imgur.com/D1TibyC.png" width="20%">

It will change according to your current Discord status.

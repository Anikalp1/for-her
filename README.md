# Will You Be My Valentine? 💝

A cute and interactive Valentine's Day proposal website with a fun twist! The "No" button runs away and shrinks when you try to click it, while the "Yes" button grows bigger. Eventually leads to a beautiful congratulations page with animations.

## Features

- 🎥 **Background Video**: Looping video with a rusty/pink gradient overlay
- 💖 **Interactive Buttons**:
  - "Yes" button that grows and celebrates your choice
  - "No" button that moves away and shrinks when hovered or clicked
- 🎉 **Congratulations Page**: Beautiful celebration with confetti and heart animations
- 📱 **Responsive Design**: Works on all devices (desktop, tablet, mobile)
- ✨ **Cute Animations**: Floating hearts, pulsing effects, and smooth transitions
- 🎨 **Beautiful Gradient**: Romantic pink/rose gradient overlay

## How to Use

1. **Open the website**: Simply open `index.html` in your browser
2. **Try to click "No"**: Watch as the button moves away and gets smaller!
3. **Click "Yes"**: See the beautiful congratulations animation

## Customization

### Change the Background Video

Replace the video URL in `index.html` (line 16):
```html
<source src="YOUR_VIDEO_URL_HERE.mp4" type="video/mp4">
```

You can use videos from:
- [Pexels](https://www.pexels.com/videos/)
- [Pixabay](https://pixabay.com/videos/)
- [Mixkit](https://mixkit.co/free-stock-video/)
- Your own video file (place it in the project folder)

### Change the GIFs

Replace the GIF URLs in `index.html`:
- Question page GIF (line 25)
- Celebration page GIF (line 44)

Find cute GIFs on [Giphy](https://giphy.com/)

### Customize Colors

Edit `style.css` to change:
- Gradient colors (lines 38-45)
- Button colors (lines 157-159, 164-166)
- Text colors throughout the file

### Modify Messages

Edit `script.js` to change:
- "No" button messages (lines 13-24)
- Hint message (line 149)

## File Structure

```
will-you-be-my-valentine/
│
├── index.html          # Main HTML structure
├── style.css           # Styles and animations
├── script.js           # Interactive functionality
└── README.md          # This file
```

## Features Breakdown

### No Button Behavior
- Moves to random positions when hovered/clicked
- Shrinks with each interaction
- Changes text messages
- Becomes transparent after multiple attempts
- Works on touch devices
- Even prevents keyboard navigation!

### Yes Button Behavior
- Grows bigger as No button shrinks
- Wiggle animation to attract attention
- Shows congratulations page when clicked

### Congratulations Page
- Bouncing title animation
- Exploding hearts effect
- Confetti rain (50 animated emojis)
- Cute celebration GIF
- Glowing text effects

## Browser Support

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## Mobile Friendly

Fully responsive design with touch support for mobile devices.

## Tips for Best Experience

1. **Use a romantic video**: Choose a video with soft colors (pink, rose, pastel)
2. **Test the buttons**: The "No" button has 11 different messages before becoming nearly impossible to click
3. **Share the love**: Send this to your Valentine! 💕

## Credits

- Built with HTML, CSS, and JavaScript
- GIFs from Giphy
- Videos from Pixabay/Mixkit
- Made with 💖

## License

Feel free to use and modify this project for your Valentine! 🌹

---

**Happy Valentine's Day! 💝**

## Customization

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
for-her/
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

# Ratyli: Simple jQuery Rating Plugin

### Output: 
★★★☆☆

### HTML
```html
<span class="ratyli" data-rate="3"></span>
```

### JS 
```js
$(function() {
    $('.ratyli').ratyli();
});
```

### Demo & Examples

http://codepen.io/peet86/pen/LEzrYy (CodePen)

###Quick start: 
Incude the latest jQuery library and the jquery.ratyli.min.js script in to your HTML `<header>` or before the `</body>` tag:
```html
<script src="jquery.ratyli.min.js"></script>
```


### CSS
No CSS required, but you can pimp your ratings with these CSS selectors:
```css
.ratyli{} /* container style*/
.ratyli.rated{} /* container style after rating*/
.ratyli .rate{} /* sign style*/
.ratyli .rate-active{} /* sign hover style */
.ratyli .rate-full{} /* full sign style */
.ratyli .rate-empty{} /* empty sign style */
/*etc..*/
```
Check the demo and play with the examples: 
http://codepen.io/peet86/pen/LEzrYy (CodePen)

### Font Awesome 
You can use the amazing Font Awesome icons as rating signs easily:
```js
 $(".ratyli").ratyli({
      full:"<i class='fa fa-thumbs-up'></i>",
      empty:"<i class='fa fa-thumbs-o-up'></i>",
});
```

### Updates

#### v0.3 (24.11.2015)
- unrateable attribute
- html5 data-rate and data-ratemax attributes
- other small fixes

#### v0.2.1 (09.02.2015)
- rated CSS selector fix

#### v0.2 (09.02.2015)
- Font Awesome fix
- interactive parameter replaced with disabled

## Notes
* Requires jQuery 1.7+.
* Works in all A-grade browsers and IE9+.
* The name inspired by the famous hungarian food: Ratyli. ;)

## License
This plugin is available under Apache 2.0 license.


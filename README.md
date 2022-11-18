# Calculator
simple app, for a front-end technical interview.</br> 
Developed over a few days, as i had a lot to remenber about React.

## ENG

This was a simple assignment, in order to simulate a technical interview.</br>
I was provided with an image of how the app should look like, what it should accomplish, and an API ready to use.</br>

Honestly i didn't understand the real world usefulness of the app, other than it calculates the interest of a transaction, something like a bussiness recieving the funds for a sale before the usual time.</br>

Anyway, that wasn't a road-block, the supplied image was pretty clear, and the calculations were already sorted in the back-end.<br/>

This was the desired outcome:</br>

![plot](./advancement_calculator/projectImg.png)

### `My decision making`

I haven't touched React in 4 months prior to this, (learning back-end development in NodeJS and Django), so even though i was allowed to use some libs that would make life easier (Styled-Components, Material UI, Axios, Yup, etc...) i decided to force myself to just stick to "vanilla" React, as a way to remenber.<br/>

I wanted to stick as close as possible to the desired look for the app, so the only detail i extrapolated was the app layout on mobile, simply changing the direction of the panels.

**The "problem" of not having buttons**

If i had the liberty (or rather if i wanted to), i would include a button so the user had the control of when to send the request, but notice that the picture didn't have a submit button, it felt as too big of an undue liberty for me to include one, even if it felt right.<br/>

I could be wrong, but it feels to me that's not great for the user, not the best/intuitive/clear UI design, nevertheless to accomplish my goal i came up with 2 options:<br/>

The one i chose was awaiting for the user to fill the info, and after he is done (as in there's no typing for 4 seconds and the data is valid, the request is sent).<br/>

Alternatively, i could have hidden a submit button that was trigerred on a key press (likely ENTER), but that would require me to somehow instruct the user to do so, altering the desired app (something i didn't want to do). In hindsight it might have been better in other ways, that i'll elaborate when it comes to tests.<br/>

### `How it works`

All you need to do is to clone de Repo, install dependencies with `yarn` and run the app locally with `yarn start`, or alternatively at [the deploy](https://andre-perregil-calculator-ptbr.vercel.app)</br>

Fill the data, wait 4 seconds and in the summary panel you have your estimate. 

### `Tests`

This is where my decision to not include a button came back to haunt me. Since to request was contingent on a useEffect hook, i couldn't figure out how to test the app end-to-end, so unfortunatly i stuck to simply testing if the components were rendering as intended.</br>
I'm sure there was a way, but honestly most of my testing experience has been in the back-end. Might revisit this later as i get more experience at testing in the front-end.

### `What i could've done differently`

The Styled-components lib would have made styling easier/ more organised, i used Css modules instead as it was the closest "vanilla" option i had.</br>
Yup would be great to not only validate the user data, but to enable customised data field errors instead of the basic instructions i added to the inputs on hover/focus. There's no feedback for the user if the data used isn't valid, the request just never fires.</br>
I really think this app needed a button, but maybe that's just me being frustrated i couldn't figure out end-to-end testing without one.<br/>

## `Thank you for your time!`



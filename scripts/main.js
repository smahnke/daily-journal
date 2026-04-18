//get container element by id & */
const mainContainer = document.querySelector("#container");

const applicationHTML = `
<header class="header">
    <h1>Daily Rebuild [SM]</h1>
    <img src="https://cdn.creazilla.com/icons/3263938/self-improvement-icon-sm.png" alt="logo" class="logo"></img>
</header>
    <form class="entryForm">
        <fieldset>
            <label for="entryDate">Date</label>
            <input type="date" name="entryDate" class="entryForm__date">
        </fieldset>
    </form>
<article class="services">

</article>

<h2>Areas</h2>
<section id="locationsAndGuests">
        

    <article class="guests">
        <h2>Current Guests</h2>
       
    </article>
</section>
`;

mainContainer.innerHTML = applicationHTML;
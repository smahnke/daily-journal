//get container element by id & */
const mainContainer = document.querySelector("#container");

const applicationHTML = `
<header class="header">
    <img src="https://cdn.creazilla.com/icons/3263938/self-improvement-icon-sm.png" alt="logo" class="logo">
    <h1>Daily Rebuild [SM]</h1>
</header>

    <form class="entryForm">
        <fieldset>
            <label for="entryDate">Date</label>
            <input type="date" name="entryDate" class="entryForm__date">
        </fieldset>

        <fieldset>
            <label for="Mood">Mood for the day</label>
            <input type="text" list="entry-options" id="entry-choice" name="entry-choice" placeholder="Select or type...">

                <datalist id="entry-options">
                    <option value="amazing">
                    <option value="good">
                    <option value="meh">
                    <option value="bad">
                    <option value="awful">
                </datalist>
        </fieldset>
    </form>
<article class="services">

</article>

<h2>Areas</h2>
<section id="locationsAndGuests">
        

    <article class="guests">
        <h2>Completion Rates by Week</h2>
       
    </article>
</section>
`;

mainContainer.innerHTML = applicationHTML;
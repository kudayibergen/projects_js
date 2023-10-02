const { By, Builder, until } = require("selenium-webdriver");
const { expect } = require("chai");

describe("6 module", async function() {

    this.timeout(15000);

    it("task1_finding all locators", async function() {
        
        //  для раздела А написать локатор

        /*
        <section class="header">
            <h1>Ежедневник</h1>
            <div>
        <p>На текущий год</p> <!-- Нужен этот элемент -->
            </div>
            <p>Первая запись</p> <!-- Нужен этот элемент -->
            <p>Вторая запись</p>  <!-- Нужен этот элемент -->
        </section>
        */

        const paragraphLocator = By.css("section.header p");


        // для раздела В написать локатор

        /*
        <section>
            <h1>Ежедневник</h1>
            <main>
        <div class="mainText text" name="mainBlock">
        <a href='#'>Посмотреть за предыдущий год</a><!-- Нужен этот элемент -->
        </div>
            </main>
            <div class="text">
        <a href='#'>На текущий год</a> <!-- Нужен этот элемент -->
        <div>
        <a href='#'>Еще ранее</a>
        </div>
            </div>
            <p>Первая запись</p> 
            <p>Вторая запись</p>    
        </section>
        */

        const linksLocator = By.css("a:not(:nth-of-type(3))");


        // для раздела С

        /*
        <section>

            <h1>Ежедневник</h1>

            <div class="text">

        <div class="header" name="headerName">

        <a href='#'>Посмотреть за предыдущий год</a>

        </div>

            </div>

            <div class="text">

        <a href='#'>На текущий год</a> <!-- Нужен этот элемент -->

        <div>

        <a href='#'>Еще записи...</a>

        </div>

            </div>

            <div class="text">

        <a href='#'>За прошлый год</a>

        <div>

        <a href='#'>Еще записи...</a>

        </div>

            </div>

            <p>Первая запись</p> 

            <p>Вторая запись</p>    

        </section>
        */

        const thisYearLocator = By.css("div.header[name = 'headerName'] a:nth-of-type(2)");
    })
})
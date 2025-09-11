onload = function () {
    const navCloseBtn = document.getElementById('nav-close');
    navCloseBtn.addEventListener('click', function () {
        const nav = document.getElementById("topnav");
        nav.className === "topnav" ? nav.className += " responsive" : nav.className = "topnav";
    });
    const filterContainer = document.getElementById('filter-container');
    const filterSection = this.document.createElement('article');
    filterSection.innerHTML = `
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="0" checked>
            <label class="form-check-label" for="inlineRadio1">همه موارد</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="1">
            <label class="form-check-label" for="inlineRadio2">شعر</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="2">
            <label class="form-check-label" for="inlineRadio3">داستان</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="3">
            <label class="form-check-label" for="inlineRadio4">سخنرانی</label>
        </div>
    `
    filterContainer.appendChild(filterSection);

    function renderVideos(list) {
        const container = document.getElementById('article-container');
        container.innerHTML = "";
        list.forEach(item => {
            const article = document.createElement('article');

            article.innerHTML = `
            <div class="video-wrapper" data-yt-url="${item.youtubeUrl}">
                <img src="${item.imageUrl}" alt="Video Poster" class="video-poster" />
                <div class="icon play-button">▶</div>
            </div>
            <h5>${item.title}</h5>
            
        `;
            container.appendChild(article);
        });

        document.querySelectorAll('.video-wrapper').forEach(wrapper => {
            wrapper.addEventListener('click', function () {
                const ytUrl = this.dataset.ytUrl;
                this.innerHTML = `
                <iframe width="560" height="315" src="${ytUrl}" frameborder="0"
                    allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                </iframe>
            `;
            });
        });
    }

    function filterVideos(option) {
        if (option === "0") {
            return eventList; // all
        }

        const categoryNum = parseInt(option);
        return eventList.filter(v => v.category.includes(categoryNum));
    }

    renderVideos(eventList);

    document.querySelectorAll('input[name="inlineRadioOptions"]').forEach(radio => {
        radio.addEventListener("change", event => {
            const selectedOption = event.target.value;
            const filtered = filterVideos(selectedOption);

            renderVideos(filtered);
        });
    });

};
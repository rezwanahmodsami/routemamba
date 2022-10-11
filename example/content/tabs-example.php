<style>
    .TabRoot{
        width: 500px;
        height: 500px;
        background-color: green;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
    }
    .tabs-btns{
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .tabs-btns button{
        margin-right: 5px;
    }
    .tab-contents {
        width: 480px;
        padding: 5px;
        background-color: red;
    }
    .tab-active {
        background-color: yellow;
        display: flex;
    }
    .activeTab{
        display: block !important;
    }

    .tab-active2 {
        background-color: yellow;
        display: flex;
    }
    .activeTab2{
        display: block !important;
    }
    .tab-container{
        display: none;
    }
</style>

<div class="TabRoot">
    <div class="tabs-btns">
        <button class="tab-switcher" tabRoute="tab1">Tab1</button>
        <button class="tab-switcher" tabRoute="tab2">Tab2</button>
        <button class="tab-switcher" tabRoute="tab3">Tab3</button>
    </div>
    <div class="tab-contents">
        <div id="tab1" class="tab-container">
        </div>
        <div id="tab2" class="tab-container">
        </div>
        <div id="tab3" class="tab-container">
        </div>
    </div>
</div>

<div class="TabRoot">
    <div class="tabs-btns">
        <button class="tab-switcher2" tabRoute="tab12">Tab1</button>
        <button class="tab-switcher2" tabRoute="tab22">Tab2</button>
        <button class="tab-switcher2" tabRoute="tab32">Tab3</button>
    </div>
    <div class="tab-contents">
        <div id="tab12" class="tab-container">
        </div>
        <div id="tab22" class="tab-container">
        </div>
        <div id="tab32" class="tab-container">
        </div>
    </div>
</div>

<script>
    routemamba.initTabs([
        {
            tabSwitcher: ".tab-switcher",
            initialTab: "tab1",
            activeSwitcherClass: "tab-active",
            activeTabClass: "activeTab",
            tabs: [
                {
                    tabRoute: "tab1",
                    content_url: "content/tabs/tab1.php",
                    preloader: 'loading...',
                    error_handler: 'error',
                },
                {
                    tabRoute: "tab2",
                    content_url: "content/tabs/tab2.php",
                    preloader: 'loading...',
                    error_handler: 'error',
                },
                {
                    tabRoute: "tab3",
                    content_url: "content/tabs/tab3.php",
                    preloader: 'loading...',
                    error_handler: 'error',
                },
            ]
        },
        {
            tabSwitcher: ".tab-switcher2",
            initialTab: "tab22",
            activeSwitcherClass: "tab-active2",
            activeTabClass: "activeTab2",
            tabs: [
                {
                    tabRoute: "tab12",
                    content_url: "content/tabs/tab1.php",
                    preloader: 'loading...',
                    error_handler: 'error',
                },
                {
                    tabRoute: "tab22",
                    content_url: "content/tabs/tab2.php",
                    preloader: 'loading...',
                    error_handler: 'error',
                },
                {
                    tabRoute: "tab32",
                    content_url: "content/tabs/tab3.php",
                    preloader: 'loading...',
                    error_handler: 'error',
                },
            ]
        },
    ]);
</script>

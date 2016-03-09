<div id="menu-icon">
    <span class="genericon genericon-menu"></span>
</div>
<nav id="navbar" ng-controller="mainViewController">
    <ul class="links">
        <li><a class="links-item" href="#/">portfolio</a></li>
        <li ng-repeat="page in pages"><a class="links-item" ng-href="#/page/{{ page.slug }}">{{ page.title }}</a> </li>
        <li><a href="https://github.com/patmaz" target="_blank" class="links-item"><span class="genericon genericon-github font-size-5"></span></a></li>
        <li><a href="https://pl.linkedin.com/in/patryk-mazurkiewicz-71461094" target="_blank" class="links-item"><span class="genericon genericon-linkedin-alt font-size-5"></span></a></li>
    </ul>
    <span id="close-icon" class="genericon genericon-close-alt font-size-5 center-down"></span>
</nav>
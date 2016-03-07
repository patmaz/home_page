<div id="sidebar" ng-controller="mainViewController">
    
    <ul>
        <li><a href="#/">portfolio</a></li>
        <li ng-repeat="page in pages"><a ng-href="#/page/{{ page.slug }}">{{ page.title }}</a> </li>
    </ul>
    
</div>
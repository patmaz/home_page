<?php get_header(); ?>
<?php get_sidebar(); ?>

<section id="main" class="container-fluid">
    <div id="content" class="row">
        <div class="col-md-10 col-md-offset-1" ng-view autoscroll="false">
            
        </div>
    </div>
</section>

<?php get_footer(); ?>
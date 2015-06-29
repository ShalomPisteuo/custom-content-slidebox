Example Drupal 7 module that creates a custom slide out block.

This is a work example of a custom Drupal 7 module. It has no module dependencies.

Users of this module in their own project need to create a new region in the themes .info file called "regions[custom_slidebox]  = Custom slidebox". Then in their page.tpl.php file appropriatetly render the region using:

<?php if ($custom_slidebox): ?>
	<div id="custom-slidebox"><?php print $custom_slidebox; ?></div>
<?php endif; ?>

Once this is done you can attach as many blocks to the region as you would like which will slide out once the page viewer reaches 1000px from the slidebox_trigger div. You can make anything slide out as long as you can make it a block.

This module is only provided as a guide and example that you can apply to your own project.
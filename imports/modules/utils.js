export const toggleNav = () => {
	if($('.navbar-toggle.collapsed').length == 0)
		$('.navbar-toggle').click();
}

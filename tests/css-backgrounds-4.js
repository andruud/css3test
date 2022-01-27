export default {
	"title": "CSS Backgrounds and Borders Module Level 4",
	"links": {
		"dev": "css-backgrounds-4",
	},
	"status": {
		"stability": "experimental"
	},
	"properties": {
		"background-position-x": {
			"links": {
				"dev": "#background-position-longhands"
			},
			"tests": ["right", "center", "50%", "left, left", "left, right", "right, left", "left, 0%", "10%, 20%, 40%", "0px", "30px", "0%, 10%, 20%, 30%", "left, left, left, left, left", "calc(20px)", "calc(20px + 1em)", "calc(20px / 2)", "calc(20px + 50%)", "calc(50% - 10px)", "calc(-20px)", "calc(-50%)", "calc(-20%)", "right 20px", "left 20px", "right -50px", "left -50px", "right 20px"]
		},
		"background-position-y": {
			"links": {
				"dev": "#background-position-longhands"
			},
			"tests": ["bottom", "center", "50%", "top, top", "top, bottom", "bottom, top", "top, 0%", "10%, 20%, 40%", "0px", "30px", "0%, 10%, 20%, 30%", "top, top, top, top, top", "calc(20px)", "calc(20px + 1em)", "calc(20px / 2)", "calc(20px + 50%)", "calc(50% - 10px)", "calc(-20px)", "calc(-50%)", "calc(-20%)", "bottom 20px", "top 20px", "bottom -50px", "top -50px", "bottom 20px"]
		}
	}
};
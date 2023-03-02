// Copyright (C) 2018-2022, Tellusim Technologies Inc.
// https://www.tellusim.com

/*
 */
var api_buttons = [];
var api_index = undefined;
var api_names = [ "vk", "gl", "d3d12", "d3d11", "mtl" ];

var video_mode_buttons = [];
var video_mode_index = undefined;

var show_fps = undefined;
var show_info = undefined;
var show_sensors = undefined;

var render_mode_buttons = [];
var render_mode_index = undefined;
var render_mode_names = [ "default", "cs", "ms", "rt" ];
var render_mode_row = undefined;

var antialiasing_buttons = [];
var antialiasing_index = undefined;

var resolution_items = [];
var resolution_index = undefined;
var resolution_widths = [ 0, 0, 7680, 5120, 3840, 2560, 1920, 1600, 1280 ];
var resolution_heights = [ 0, 0, 4320, 2880, 2160, 1440, 1080, 900, 720 ];
var resolution_row = undefined;
var resolution_dropdown = undefined;
var resolution_menu = undefined;
var resolution_size = undefined;
var resolution_width = undefined;
var resolution_height = undefined;

var asteroids_items = [];
var asteroids_index = undefined;
var asteroids_count = [ 4000, 2000, 1000, 500, 200, 100, 50 ];
var asteroids_dropdown = undefined;
var asteroids_menu = undefined;

var lod_items = [];
var lod_index = undefined;
var lod_bias = [ 6, 3, 1, 0 ];
var lod_dropdown = undefined;
var lod_menu = undefined;

var multi_mode_buttons = [];
var multi_mode_index = undefined;
var multi_mode_row = undefined;

var device_0_items = [];
var device_0_index = undefined;
var device_0_dropdown = undefined;
var device_0_text = undefined;
var device_0_menu = undefined;

var device_1_items = [];
var device_1_index = undefined;
var device_1_dropdown = undefined;
var device_1_menu = undefined;
var device_1_row = undefined;

var screen_items = [];
var screen_index = undefined;
var screen_dropdown = undefined;
var screen_menu = undefined;
var screen_row = undefined;

var user_name = undefined;

/*
 */
function set_storage(name, value) {
	localStorage.setItem("gravitymark_" + name, value);
}

function get_storage(name) {
	return localStorage.getItem("gravitymark_" + name);
}

/*
 */
function set_device(api_name) {
	if(device_1_items.length > 2 && (api_name == "vk" || api_name == "d3d12")) {
		if(multi_mode_index > 0) {
			device_0_text.text("Device 0");
			device_1_row.show();
		} else {
			device_0_text.text("Device");
			device_1_row.hide();
		}
		multi_mode_row.show();
	} else {
		device_0_text.text("Device");
		multi_mode_row.hide();
		device_1_row.hide();
	}
}

/*
 */
function set_api(index) {
	index = Math.min(index, api_names.length - 1);
	if(api_index != index) {
		api_buttons[api_names[index]].button("toggle");
		set_storage("api", index);
		api_index = index;
	}
	let api_name = api_names[index];
	if(render_mode_row != undefined) {
		set_render_mode(render_mode_index);
		if(api_name == "vk" || api_name == "d3d12" || api_name == "mtl") {
			render_mode_buttons[2].show();
			render_mode_buttons[3].show();
		} else {
			render_mode_buttons[2].hide();
			render_mode_buttons[3].hide();
		}
	}
	if(multi_mode_row != undefined) {
		set_multi_mode(multi_mode_index);
		set_device(api_name);
	}
}

function set_video_mode(index) {
	index = Math.min(index, video_mode_buttons.length - 1);
	if(video_mode_index != index) {
		video_mode_buttons[index].button("toggle");
		set_storage("video_mode", index);
		video_mode_index = index;
	}
	if(resolution_row != undefined) {
		if(index == 2) {
			resolution_row.hide();
			resolution_size.hide();
		} else {
			resolution_row.show();
			set_resolution(resolution_index);
		}
	}
	if(screen_row != undefined) {
		if(index != 2 && screen_items.length > 2) screen_row.show();
		else screen_row.hide();
	}
}

function set_render_mode(index) {
	index = Math.min(index, render_mode_buttons.length - 1);
	if(render_mode_index != index) {
		render_mode_buttons[index].button("toggle");
		set_storage("render_mode", index);
		render_mode_index = index;
	}
}

function set_antialiasing(index) {
	index = Math.min(index, antialiasing_buttons.length - 1);
	if(antialiasing_index != index) {
		antialiasing_buttons[index].button("toggle");
		set_storage("antialiasing", index);
		antialiasing_index = index;
	}
}

function set_resolution(index) {
	index = Math.min(index, resolution_items.length - 1);
	if(resolution_index != index) {
		resolution_items[index].addClass("active");
		if(resolution_index != undefined) resolution_items[resolution_index].removeClass("active");
		resolution_dropdown.text(resolution_items[index].text());
		set_storage("resolution", index);
		resolution_index = index;
	}
	if(resolution_size != undefined) {
		if(index == 1) resolution_size.show();
		else resolution_size.hide();
	}
}

function set_multi_mode(index) {
	index = Math.min(index, multi_mode_buttons.length - 1);
	if(multi_mode_index != index) {
		multi_mode_buttons[index].button("toggle");
		set_storage("multi_mode", index);
		multi_mode_index = index;
	}
	if(multi_mode_row != undefined) {
		set_device(api_names[api_index]);
	}
}

function set_device_0(index) {
	index = Math.min(index, device_0_items.length - 1);
	if(device_0_index != index) {
		device_0_items[index].addClass("active");
		if(device_0_index != undefined) device_0_items[device_0_index].removeClass("active");
		device_0_dropdown.text(device_0_items[index].text());
		set_storage("device_0", index);
		device_0_index = index;
	}
}

function set_device_1(index) {
	index = Math.min(index, device_1_items.length - 1);
	if(device_1_index != index) {
		device_1_items[index].addClass("active");
		if(device_1_index != undefined) device_1_items[device_1_index].removeClass("active");
		device_1_dropdown.text(device_1_items[index].text());
		set_storage("device_1", index);
		device_1_index = index;
	}
}

function set_screen(index) {
	index = Math.min(index, screen_items.length - 1);
	if(screen_index != index) {
		screen_items[index].addClass("active");
		if(screen_index != undefined) screen_items[screen_index].removeClass("active");
		screen_dropdown.text(screen_items[index].text());
		set_storage("screen", index);
		screen_index = index;
	}
}

function set_asteroids(index) {
	index = Math.min(index, asteroids_items.length - 1);
	if(asteroids_index != index) {
		asteroids_items[index].addClass("active");
		if(asteroids_index != undefined) asteroids_items[asteroids_index].removeClass("active");
		asteroids_dropdown.text(asteroids_items[index].text());
		set_storage("asteroids", index);
		asteroids_index = index;
	}
}

function set_lod(index) {
	index = Math.min(index, lod_items.length - 1);
	if(lod_index != index) {
		lod_items[index].addClass("active");
		if(lod_index != undefined) lod_items[lod_index].removeClass("active");
		lod_dropdown.text(lod_items[index].text());
		set_storage("lod", index);
		lod_index = index;
	}
}

/*
 */
function run_demo(index) {
	if(index == 0) run(" -openxr 1");
	if(index == 1) run(" -stereo 1");
	if(index == 2) run(" -panorama 1");
}

/*
 */
function run(options) {
	
	// binary
	let command = "exec/";
	if(get_platform() == "windows") command += "GravityMark.exe";
	else if(get_platform() == "linux") command += ":/GravityMark." + get_arch();
	else if(get_platform() == "macos") command += ":/GravityMark";
	
	// api name
	let api_name = api_names[api_index];
	command += " -" + api_name;
	
	// render mode
	let render_mode_name = render_mode_names[render_mode_index];
	if(render_mode_name == "cs") command += " -cs 1";
	if(render_mode_name == "ms" && (api_name == "vk" || api_name == "d3d12" || api_name == "mtl")) command += " -ms 1";
	if(render_mode_name == "rt" && (api_name == "vk" || api_name == "d3d12" || api_name == "mtl")) command += " -rt 1";
	
	// antialiasing
	if(antialiasing_index == 0) command += " -ta 1";
	
	// device index
	if(device_0_index > 0) command += " -d " + (device_0_index - 1);
	
	// screen index
	if(screen_index > 0) command += " -s " + (screen_index - 1);
	
	// fullscreen mode
	if(video_mode_index == 1) command += " -fs 1";
	else if(video_mode_index == 2) command += " -fd 1";
	
	// resolution
	if(video_mode_index != 2) {
		if(resolution_index > 1) {
			command += " -w " + resolution_widths[resolution_index];
			command += " -h " + resolution_heights[resolution_index];
		} else if(resolution_index == 1) {
			command += " -w " + (parseInt(resolution_width.val()) || 1600);
			command += " -h " + (parseInt(resolution_height.val()) || 900);
		}
	}
	
	// multi-GPU mode
	if(multi_mode_index > 0 && device_1_items.length > 2 && device_1_index > 0 && device_1_index != device_0_index) {
		if(multi_mode_index == 1) command += " -split " + (device_1_index - 1);
		if(multi_mode_index == 2) command += " -alternate " + (device_1_index - 1);
	}
	
	// asteroids count
	command += " -a " + (asteroids_count[asteroids_index] * 1000);
	
	// load bias
	if(lod_index != 3) command += " -l " + (lod_bias[lod_index]);
	
	// show info
	if(show_fps.hasClass("active")) command += " -fps 1";
	if(show_info.hasClass("active")) command += " -info 1";
	if(show_sensors.hasClass("active")) command += " -sensors 1";
	
	// user name
	let name = user_name.val();
	if(name) {
		set_storage("user_name", name);
		command += " -name \"" + name + "\"";
	}
	
	// custom options
	command += options;
	
	// run benchmark
	let request = new XMLHttpRequest();
	request.open("GET", command, true);
	request.onreadystatechange = function() {
		if(request.readyState == request.DONE && request.status == 200) {
			if(request.responseText == "0") {
				$('#modal_error').modal("show");
			} else if(get_storage("first_run") == null) {
				$('#modal_first').modal("show");
				set_storage("first_run", 0);
			}
		}
	}
	request.ontimeout = function() {
		$('#modal_timeout').modal("show");
	};
	request.timeout = 500;
	request.send(null);
}

/*
 */
function create_form(system) {
	
	// primary device
	device_0_text = $("#device_0_text");
	device_0_dropdown = $("#device_0_dropdown");
	device_0_menu = $("#device_0_menu");
	device_0_items[0] = $("#device_0_0");
	
	// secondary device
	device_1_dropdown = $("#device_1_dropdown");
	device_1_menu = $("#device_1_menu");
	device_1_items[0] = $("#device_1_0");
	
	// device list
	for(let i = 0; i < 16; i++) {
		let gpu = "gpu_" + i;
		if(!(gpu in system)) break;
		let name = "device_" + (i + 1);
		let text = system[gpu]["name"];
		let name_0 = "device_0_" + (i + 1);
		let name_1 = "device_1_" + (i + 1);
		device_0_menu.append('<a class="dropdown-item text-capitalize" href="javascript:set_device_0(' + (i + 1) + ');" id="' + name_0 + '">' + text + '</a>');
		device_1_menu.append('<a class="dropdown-item text-capitalize" href="javascript:set_device_1(' + (i + 1) + ');" id="' + name_1 + '">' + text + '</a>');
		device_0_items[i + 1] = $("#" + name_0);
		device_1_items[i + 1] = $("#" + name_1);
	}
	let device_0_index = get_storage("device_0");
	let device_1_index = get_storage("device_1");
	set_device_0(device_0_index || 0);
	set_device_1(device_1_index || 0);
	
	// update multi-GPU controls
	set_api(api_index);
	
	// screen list
	screen_dropdown = $("#screen_dropdown");
	screen_menu = $("#screen_menu");
	screen_items[0] = $("#screen_0");
	screen_row = $("#screen_row");
	for(let i = 0; i < 16; i++) {
		let screen = "screen_" + i;
		if(!(screen in system)) break;
		let name = "screen_" + (i + 1);
		let text = system[screen]["name"] + " (" + system[screen]["width"] + " × " + system[screen]["height"] + ", " + system[screen]["position_x"] + ", " + system[screen]["position_y"] + ")";
		screen_items[i + 1] = screen_menu.append('<a class="dropdown-item text-capitalize" href="javascript:set_screen(' + (i + 1) + ');" id="' + name + '">' + text + '</a>');
		screen_items[i + 1] = $("#" + name);
	}
	let screen_index = get_storage("screen");
	set_screen(screen_index || 0);
	
	// remove fulldesktop mode and screen selector when there is only single screen
	if(screen_items.length == 2) {
		video_mode_buttons[2].remove();
		screen_row.hide();
	}
	
	// run buttons
	$("#run_demo").on("click", function() { run(" -benchmark 0"); });
	$("#run_benchmark").on("click", function() { run(" -benchmark 1"); });
	$("#open_manual").on("click", function() { request('open/::/GravityMark_Manual.pdf'); });
	$("#open_results").on("click", function() { request('open/' + get_documents_directory()); });
	
	// show content
	$("#body").show();
}

/*
 */
function init() {
	
	// api
	for(let i = 0; i < api_names.length; i++) {
		let name = api_names[i];
		api_buttons[name] = $("#api_" + i);
		api_buttons[name].on("click", function() { set_api(i); });
	}
	let api_index = get_storage("api");
	if(get_platform() == "windows") {
		api_buttons["mtl"].remove();
	} else if(get_platform() == "linux") {
		api_buttons["d3d12"].remove();
		api_buttons["d3d11"].remove();
		api_buttons["mtl"].remove();
	} else if(get_platform() == "macos") {
		api_buttons["vk"].remove();
		api_buttons["gl"].remove();
		api_buttons["d3d12"].remove();
		api_buttons["d3d11"].remove();
		api_names[0] = "mtl";
	}
	set_api(api_index || 0);
	
	// show
	show_fps = $("#show_fps");
	show_info = $("#show_info");
	show_sensors = $("#show_sensors");
	if(get_storage("show_fps") == null || get_storage("show_fps") == 1) show_fps.addClass("active");
	if(get_storage("show_info") == null || get_storage("show_info") == 1) show_info.addClass("active");
	if(get_storage("show_sensors") == null || get_storage("show_sensors") == 1) show_sensors.addClass("active");
	show_fps.on("click", function() { set_storage("show_fps", show_fps.hasClass("active") ? 0 : 1); });
	show_info.on("click", function() { set_storage("show_info", show_info.hasClass("active") ? 0 : 1); });
	show_sensors.on("click", function() { set_storage("show_sensors", show_sensors.hasClass("active") ? 0 : 1); });
	
	// render mode
	for(let i = 0; i < 4; i++) {
		render_mode_buttons[i] = $("#render_mode_" + i);
		render_mode_buttons[i].on("click", function() { set_render_mode(i); });
	}
	render_mode_row = $("#render_mode_row");
	set_render_mode(get_storage("render_mode") || 0);
	
	// antialiasing
	for(let i = 0; i < 2; i++) {
		antialiasing_buttons[i] = $("#antialiasing_" + i);
		antialiasing_buttons[i].on("click", function() { set_antialiasing(i); });
	}
	set_antialiasing(get_storage("antialiasing") || 0);
	
	// custom resolution
	resolution_size = $("#resolution_size");
	resolution_width = $("#resolution_width");
	resolution_height = $("#resolution_height");
	resolution_width.on("change", function() { set_storage("resolution_width", parseInt(resolution_width.val()) || 1600); });
	resolution_height.on("change", function() { set_storage("resolution_height", parseInt(resolution_height.val()) || 900); });
	let width = get_storage("resolution_width");
	let height = get_storage("resolution_height");
	resolution_width.val("" + (width || 1600));
	resolution_height.val("" + (height || 900));
	
	// resolution
	for(let i = 0; i < resolution_widths.length; i++) {
		resolution_items[i] = $("#resolution_" + i);
	}
	resolution_row = $("#resolution_row");
	resolution_dropdown = $("#resolution_dropdown");
	resolution_menu = $("#resolution_menu");
	set_resolution(get_storage("resolution") || 0);
	
	// asteroids
	for(let i = 0; i < asteroids_count.length; i++) {
		asteroids_items[i] = $("#asteroids_" + i);
	}
	asteroids_row = $("#asteroids_row");
	asteroids_dropdown = $("#asteroids_dropdown");
	asteroids_menu = $("#asteroids_menu");
	set_asteroids(get_storage("asteroids") || 4);
	
	// lod bias
	for(let i = 0; i < lod_bias.length; i++) {
		lod_items[i] = $("#lod_" + i);
	}
	lod_row = $("#lod_row");
	lod_dropdown = $("#lod_dropdown");
	lod_menu = $("#lod_menu");
	set_lod(get_storage("lod") || 3);
	
	// video mode
	for(let i = 0; i < 3; i++) {
		video_mode_buttons[i] = $("#video_mode_" + i);
		video_mode_buttons[i].on("click", function() { set_video_mode(i); });
	}
	set_video_mode(get_storage("video_mode") || 0);
	
	// multi-GPU mode
	for(let i = 0; i < 3; i++) {
		multi_mode_buttons[i] = $("#multi_mode_" + i);
		multi_mode_buttons[i].on("click", function() { set_multi_mode(i); });
	}
	set_multi_mode(get_storage("multi_mode") || 0);
	
	// hide multi-GPU controls
	multi_mode_row = $("#multi_mode_row");
	device_1_row = $("#device_1_row");
	multi_mode_row.hide();
	device_1_row.hide();
	
	// user name
	user_name = $("#user_name");
	let name = get_storage("user_name");
	if(name) user_name.val(name);
	
	// run demo
	if(get_platform() == "macos") {
		let run_openxr = $("#demo_0");
		run_openxr.hide();
	}
	
	// get system info
	let request = new XMLHttpRequest();
	request.open("GET", "system.js", true);
	request.onreadystatechange = function() {
		if(request.readyState == request.DONE && request.status == 200) {
			let response = request.responseText;
			if(response.length) create_form(JSON.parse(response));
		}
	};
	request.send(null);
	
	// initialize tooltips
	$('[data-toggle="tooltip"]').tooltip({
		trigger: "hover",
		placement: "top",
		delay: { "show": 500, "hide": 100 }
	});
}

/*
 */
function request(name) {
	let request = new XMLHttpRequest();
	request.open("GET", name, true);
	request.ontimeout = function() {
		$('#modal_timeout').modal("show");
	};
	request.timeout = 500;
	request.send(null);
}

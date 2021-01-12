    let imagesamount = 10
    let active_images = 2
    let imageSizeXY = 200
    let img_t = 0
    let img_am_text = 0
    let img_close = 0

    class post {
    	constructor() {
    		this.title = ''
    		this.text = ''
    		this.date = ''
    		this.dada = 'adas'
    	}
    }

    WebFont.load( {
    	google: {
    		families: [ 'Rokkitt:400,900' ]
    	}
    } );


    function setup() {
    	post = new post()
    	post.title = createElement( 'textarea', '' )
    	post.date = createInput( '' )
    	post.text = createElement( 'textarea', '' )
    	post.text.attribute( "rows", "15" );
    	post.text.attribute( "cols", "70" );
    	if ( imageSizeXY = windowWidth / 2 > 400 ) {
    		imageSizeXY = 400
    	} else { imageSizeXY = windowWidth / 2 }
    	cv = createCanvas( windowWidth, imageSizeXY )
    	createButton( 'Save' ).mousePressed( btn_p )
    	images = []
    	createGR()


    }

    function draw() {
    	clear_all()
    	background( 255 )
    	print_title_date()
    	elaborate_text()
    	print_closer( active_images - 1 )
    	display_images()


    }


    function btn_p() {
    	noLoop()
    	for ( let i = 0; i < active_images; i++ ) {
    		name = post.title.value() + str( i ) + '_' + floor( millis() ) + '.jpg'
    		images[ i ].save( name )
    	}
    	Loop()
    }

    function createGR() {
    	for ( let i = 0; i < imagesamount; i++ ) {
    		images[ i ] = createGraphics( 1000, 1000 )

    	}
    }

    function print_title_date() {
    	images[ 0 ].textAlign( CENTER, CENTER )
    	images[ 0 ].textFont( 'Rokkitt', 72 )
    	images[ 0 ].textLeading( 72 )
    	images[ 0 ].textStyle( BOLD )
    	images[ 0 ].fill( 'Black' )
    	// images[ 0 ].text( post.title.value(), images[ 0 ].width / 2, images[ 0 ].height / 2 )
    	images[ 0 ].text( post.title.value(), images[ 0 ].width / 10, images[ 0 ].height / 3, 8 * images[ 0 ].width / 10, images[ 0 ].height / 3 )
    	images[ 0 ].textFont( 'Rokkitt', 48 )
    	images[ 0 ].textStyle( NORMAL )
    	images[ 0 ].fill( 'Grey' )
    	images[ 0 ].text( post.date.value(), images[ 0 ].width / 2, 2 * images[ 0 ].height / 3 - 50 )

    }

    function print_closer( closer ) {
    	images[ closer ].textAlign( CENTER, CENTER )
    	images[ closer ].textFont( 'Rokkitt', 72 )
    	images[ closer ].textStyle( BOLD )
    	images[ closer ].fill( 'Black' )
    	images[ closer ].text( '. A quien corresponda', images[ active_images ].width / 2, images[ active_images ].height / 2 )
    	images[ closer ].textFont( 'Rokkitt', 48 )
    	images[ closer ].textStyle( NORMAL )
    	images[ closer ].fill( 'Grey' )
    	images[ closer ].text( '01/09/97', images[ active_images ].width / 2, 2 * images[ active_images ].height / 3 - 70 )

    }

    function print_text( text, i ) {
    	images[ i ].textFont( 'Rokkitt', 48 )
    	images[ i ].textStyle( NORMAL )
    	images[ i ].textAlign( RIGHT, CENTER )
    	images[ i ].fill( 0, 0, 0, 76 )
    	offset = 1
    	images[ i ].text( text, 100 + offset, 200 + offset, 800, 600 )
    	images[ i ].fill( 'Black' )
    	images[ i ].text( text, 100, 200, 800, 600 )

    }

    function elaborate_text() {
    	oText = post.text.value()
    	text = splitTokens( oText, '|' )
    	if ( text.length >= 8 ) {
    		active_images = 10
    		img_am_text = 8
    	} else {
    		img_am_text = text.length
    		active_images = text.length + 2
    	}

    	for ( let i = 0; i < img_am_text; i++ ) {
    		print_text( text[ i ], i + 1 )
    	}

    }

    function display_images() {
    	colsAM = floor( windowWidth / imageSizeXY )
    	rowsAM = floor( active_images / colsAM )
    	if ( rowsAM == 0 ) { rowsAM = 1 }
    	resizeCanvas( windowWidth, imageSizeXY * rowsAM )
    	row = 0
    	col = 0
    	for ( let i = 0; i < active_images; i++ ) {

    		if ( col == colsAM ) {

    			col = 0
    			row = row + 1

    		}
    		image( images[ i ], ( imageSizeXY + 1 ) * col, ( imageSizeXY + 1 ) * row, imageSizeXY, imageSizeXY, 0, 0, 1000, 1000 )
    		col = col + 1
    	}


    }


    function clear_all() {
    	for ( let i = 0; i < imagesamount; i++ ) {
    		images[ i ].clear()
    		images[ i ].background( 255 )
    	}

    }

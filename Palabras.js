    let imagesamount = 3
    let imageSizeXY = 500

    WebFont.load( {
    	google: {
    		families: [ 'Montserrat:300,400,700,800,900', 'Squada One' ]
    	}
    } );


    class post {
    	constructor() {
    		this.title = ''
    		this.text = ''
    	}
    }


    function setup() {

    	post = new post()
    	post.title = createInput( '' )
    	post.text = createElement( 'textarea', '' )
    	post.text.attribute( "rows", "15" );
    	post.text.attribute( "cols", "70" );
    	cv = createCanvas( windowWidth, imageSizeXY )
    	createButton( 'Save' ).mousePressed( btn_p )
    	images = []
    	createGR()


    }

    function draw() {
    	clear_all()
    	background( 220 )
    	print_category()
    	print_title()
    	elaborate_text()
    	display_images()


    }


    function btn_p() {
    	noLoop()
    	for ( let i = 0; i < imagesamount; i++ ) {
    		name = post.title.value() + str( i ) + '_' + floor( millis() ) + '.jpg'
    		images[ i ].save( name )


    	}
    }

    function createGR() {
    	footer = createGraphics( 1000, 200 )
    	for ( let i = 0; i < 6; i++ ) {
    		images[ i ] = createGraphics( 1000, 1000 )


    	}
    }

    function print_title() {
    	images[ 0 ].textAlign( CENTER, CENTER )
    	images[ 0 ].textFont( 'Montserrat', 100 )
    	images[ 0 ].textStyle( BOLD )
    	images[ 0 ].fill( 0, 0, 0, 76 )
    	images[ 0 ].text( post.title.value(), images[ 0 ].width / 2 + 10, 200 + 10 )
    	images[ 0 ].fill( 'Black' )
    	images[ 0 ].text( post.title.value(), images[ 0 ].width / 2, 200 )

    }

    function print_text( text, i ) {

    	images[ i ].textFont( 'Montserrat', 40 )
    	images[ i ].textStyle( NORMAL )
    	images[ i ].fill( 'Black' )
    	if ( i == 0 ) {
    		images[ i ].textAlign( RIGHT, TOP )
    		images[ i ].text( text, 100, 370, 800, 350 )
    	} else {
    		images[ i ].textAlign( RIGHT, CENTER )
    		images[ i ].text( text, 100, 200, 800, 500 )
    	}


    }

    function elaborate_text() {
    	oText = post.text.value()
    	text = splitTokens( oText, '\n' )
    	for ( let i = 0; i < imagesamount; i++ ) {
    		print_text( text[ i ], i )
    	}
    	imagesamount = text.length
    }

    function display_images() {
    	colsAM = floor( windowWidth / imageSizeXY )
    	rowsAM = 1 + floor( imagesamount / colsAM )
    	resizeCanvas( windowWidth, imageSizeXY * rowsAM )
    	row = 0
    	col = 0
    	for ( let i = 0; i < imagesamount; i++ ) {

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
    		images[ i ].background( '#F0C200' )
    	}

    }

    function print_category() {
    	for ( let i = 0; i < imagesamount; i++ ) {
    		footer.clear()
    		footer.textAlign( LEFT, TOP )
    		footer.textFont( 'Squada One' )
    		footer.textSize( 165 )
    		footer.textStyle( BOLD )
    		footer.fill( 188, 148, 16, 67 )
    		footer.text( 'PALABRA DEL DIA', -5, 0, 2000, 200 )
    		images[ i ].image( footer, 0, 760, 1013, 350 )
    	}
    }
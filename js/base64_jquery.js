/*
	Base64 jQuery

    #############################
    # developer Newton Urbanetz #
    #############################
*/

( function( $ ) {

    $.fn.extend( {

        base64: function( options ) {

            defaultOptions = {

            	encode: {		
			    inputID 	: '#inputEncode',
			    outputID	: '#outputEncode',
                            checkedID   : '#check',
                            fooID       : '.foo',
                            fooText     : 'Encode',
                            animation   :  true,//is optnional
                            errorText   : 'Invalid!'
	            },

	            decode: {
	            	    inputID 	: '#inputDecode',
			    outputID	: '#outputDecode',
                            fooText     : 'Decode'
	            }

	        };

            var settings = $.extend( {}, defaultOptions, options );

            return this.each(function() {

            /*
            	Variables
            */

                var $this           = $( this );

                var $inputEncodeID  = $( settings.encode.inputID );

            	var $outputEncodeID = $( settings.encode.outputID );

            	var $inputDecodeID	= $( settings.decode.inputID );

            	var $outputDecodeID	= $( settings.decode.outputID );

                var $checkedID      = $( settings.encode.checkedID );

                var $fooID          = $( settings.encode.fooID );

                var $errorText      = settings.encode.errorText;

                var $fooTextEn      = settings.encode.fooText;

                var $fooTextDe      = settings.decode.fooText;

                var $animation      = settings.encode.animation;

    		/*
            	End Variables
            */		                    

                // disable insert into output 
                $outputEncodeID.prop('readonly', true);

                $outputDecodeID.prop('readonly', true);

                // function keyup encode/decode               
                var $inputEnDe = function( input, output ) {
                     
                    input.on( 'keyup', function() {
                      
                    var encode = $(this).val();

                        if ( $checkedID.is( ':checked' ) ) {

                                var res = window.btoa( encode );

                        } 

                        else {

                            var res = window.atob( encode );

                            $inputDecodeID.attr( 'placeholder', 'input' );

                        }
                      
                      output.html( res ); 
                      
                    });
                     
                };

                // set input and output encode/decode
                $inputEnDe( $inputEncodeID, $outputEncodeID );

                $inputEnDe( $inputDecodeID, $outputDecodeID );

                // if don't exist $outputDecodeID use encode ID
                if ( $inputDecodeID == false ) {

                         $checkedID.attr( 'checked', 'checked' );

                         $outputEncodeID.html( res );

                };

                // chekedID change 
                $checkedID.on( 'click', function() {

                    if (  $checkedID.is( ':checked' ) ) {

                            $( $fooID ).empty();

                            $inputEncodeID.focus();

                            $( '<h4>'+ $fooTextEn +'</h4>' ).appendTo( $fooID );

                            $animate( 'flip_back', 'flip_front' );// animate is optional

                    }

                    else {

                        $( $fooID ).empty();

                        $inputDecodeID.focus();

                        $( '<h4>'+ $fooTextDe +'</h4>' ).appendTo( $fooID );

                        $animate( 'flip_front', 'flip_back' );// animate is optional

                    }

                }).trigger( 'click' );

                // on error
                $(window).error( function(){

                            $( '<h4 class="error">'+ $errorText +'</h4>' ).appendTo( 'body' ).fadeOut(2000);

                });

                // Animate; is optional
                var $animate = function( addClass, removeClass ) {

                    if ( $animation == true ) {

                            $( '.box' ).addClass( addClass ).removeClass( removeClass );
                                            
                            $( '.title' ).animate({marginTop:'-300px'},100);
                                            
                            $( '.title' ).animate({marginTop:'-250px'},100);

                    }

                };


            });

        }

    });

})(jQuery);

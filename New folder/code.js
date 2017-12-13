$(function(){
//SCOPE !!! !!! !!!
//GLOBAL vs. LOCAL VARIABLES
//PROPER WAY
var quantity = 0
var nbaquantity = 0
var nhlquantity = 0
var mlbquantity = 0
var tax = .07
var maddenprice = 43.00
var nbaprice = 49.00
var nhlprice = 50.00
var mlbprice = 59.00

    $(".madden").click(function(){
        
        //INPUT 
        quantity += 1;
       
       
        
        //CALCULATE
        
        
        //OUTPUT
       
        $("#quantity").val(quantity);
 
    });
    
       $(".nba").click(function(){
        
        
        nbaquantity += 1;
       
        
        //CALCULATE
        
        
        //OUTPUT
        
        $("#nbaquantity").val(nbaquantity);
    })
    
       $(".nhl").click(function(){
        
        //INPUT
        nhlquantity += 1;
       
        
        //CALCULATE
       
        
        //OUTPUT
        
        $("#mlbquantity").val(mlbquantity);
    })
    
          $(".mlb").click(function(){
        
        //INPUT 
        mlbquantity += 1;
       
        
        //CALCULATE
        //var answer = 0 + quantity
        
        //OUTPUT
        //$(".answer").css("font-size", "32px");
        $("#mlbquantity").val(mlbquantity);
    })
    
     $(".get").click(function(){
        
        //INPUT
       maddenquantity = parseInt($("#quantity").val());
       nhlquantity = parseInt($("#nbaquantity").val());
       nierquantity = parseInt($("#nhlquantity").val());
       mlbquantity = parseInt($("#mlbquantity").val());

        //CALCULATE
        var total = (maddenprice * maddenquantity) + (nbaprice * nbaquantity) + (nhlprice * nhlquantity) + (mlbprice * mlbquantity)
        var taxes = total * tax
        tax2=taxes.toFixed(2)
        var grandtotal = total + taxes
        //OUTPUT
        $(".total2").css("font-size", "32px");
        $(".total2").html(total);
        $(".tax2").css("font-size", "32px");
        $(".tax2").html(tax2);
        $(".grandtotal2").css("font-size", "32px");
        $(".grandtotal2").html(grandtotal);
        
    });
})
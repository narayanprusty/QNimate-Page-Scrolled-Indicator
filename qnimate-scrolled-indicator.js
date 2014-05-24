window.addEventListener("load", function()
    {
        var indicator = document.createElement("div");
        indicator.style.position = "fixed";
        indicator.style.font = "14px";
        indicator.style.padding = "8px";
        indicator.style.backgroundColor = "black";
        indicator.style.color = "white";
        indicator.style.borderRadius = "20px";
        indicator.style.right = "10px";
        indicator.style.top = "10px";
        indicator.id = "qpercentage";

        document.body.appendChild(indicator);
    }, false)

window.addEventListener("scroll", function()
    {
        var heightOfWindow = window.innerHeight;
        var contentScrolled = window.pageYOffset;
        var bodyHeight = window.document.getElementsByTagName("body")[0].offsetHeight;
        if(bodyHeight - contentScrolled <= heightOfWindow)
        {
            window.document.getElementById("qpercentage").innerHTML = "100%";
        }
        else
        {
            var total = bodyHeight - heightOfWindow;
            var got = contentScrolled;
            window.document.getElementById("qpercentage").innerHTML = parseInt((got/total) * 100) + "%";
            var percentage = parseInt((got/total) * 100);
            var positionTop = ((percentage * heightOfWindow) / 100);
                
            if(positionTop < 10)
            {
                window.document.getElementById("qpercentage").style.top = "10px";
            }
            else if(positionTop + 40 > heightOfWindow)
            {}
            else
            {
                window.document.getElementById("qpercentage").style.top = positionTop + "px";   
            }
        }

    }, false);
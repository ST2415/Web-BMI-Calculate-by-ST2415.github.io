// Gat Value

function getValue() 
{
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const bmi = bmiCalculate(height, weight);

    showResult('result', bmi);
}



// Calculate

function bmiCalculate(height, weight)
{

    // Check cm/m
    if(Number.isInteger(height))
    {
        height = height / 100
        let bmi = weight / (height * height)
        if(Number.isNaN(bmi))
        {
            return 0
        }
        
        else
        {
            return bmi.toFixed(2)
        }
    }

    else
    {
        let bmi = weight / (height * height)
        if(Number.isNaN(bmi))
        {
            return 0
        }
        
        else
        {
            return bmi.toFixed(2)
        }

    }
    
}



// Check Fucntion

function Check(bmi)
{
    if(bmi == 0)
    {
        return ""
    }

    if(bmi >= 30.00)
    {
        return " คุณอยู่ในเกณฑ์ โรคอ้วนระดับ 3"
    }
    if(bmi >= 25.00)
    {
        return " คุณอยู่ในเกณฑ์ โรคอ้วนระดับ 2"
    }
    if(bmi >= 23.00)
    {
        return " คุณอยู่ในเกณฑ์ โรคอ้วนระดับ 1"
    }
    if(bmi >= 18.50)
    {
        return " คุณอยู่ในเกณฑ์ ปกติ"
    }
    if(bmi < 18.50)
    {
        return " คุณอยู่ในเกณฑ์ ผอมเกินไป"
    }
    
}


//Show Result

function showResult(elementID, bmi) 
{
    document.getElementById(elementID).innerHTML = "<b>" + bmi + Check(bmi) +"</b>";
}
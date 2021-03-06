var expect = chai.expect;

describe("Test para ConverTemp", function(){

    var fin = document.getElementById("resultado");
  
    it("32f === 0 Celsius", function(){
        var result = new temperatura();
        result.set_valor(32);
        result.set_tipo("F")
        result.set_valor(result.a_c());
        expect(result).to.equal("0 Celsius");
    });
    
    it("806f === 430 Celsius", function(){
        var result = new temperatura();
        result.set_valor(806);
        result.set_tipo("F");
        result.set_valor(result.a_c());
        expect(result).to.equal("430 Celsius");
    });
    
    it("58f !== 26 Celsius", function(){
        var result = new temperatura();
        result.set_valor(58);
        result.set_tipo("F");
        result.set_valor(result.a_c());
        expect(result).not.to.equal("26 Celsius");
  });
    
});
/*
var assert = chai.assert;

suite('temperature', function() {
    test('32F = 0.00C', function() {
        original.value = "32F";
        calculate();
        assert.deepEqual(converted.innerHTML, "0.00 Celsius");
    });
    test('48F = 8.89C', function() {
        original.value = "48F";
        calculate();
        assert.deepEqual(converted.innerHTML, "8.89 Celsius");
    });
    test('5X = error', function() {
        original.value = "5X";
        calculate();
        assert.match(converted.innerHTML, /ERROR/);
    });
    test('35C != 2.00 Farenheit', function() {
        original.value = "35C";
        calculate();
        assert.notEqual(converted.innerHTML, "2.00 Farenheit");
    });
    test('5C !== 21.00 Farenheit', function() {
        original.value = "35C";
        calculate();
        assert.notStrictEqual(converted.innerHTML, "2.00 Farenheit");
    });
    test('110F > 30.00C', function() {
        original.value = "110.00F";
        calculate();
        assert.isAbove(converted.innerHTML, "30.00C");
    });
});*/
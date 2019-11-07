Test.describe("Basic tests", function () {
  Test.assertSimilar(game(0), [0])
  Test.assertSimilar(game(1), [1, 2])
  Test.assertSimilar(game(8), [32])
  Test.assertSimilar(game(40), [800])
  Test.assertSimilar(game(101), [10201, 2])
  Test.assertSimilar(game(204), [20808])
  Test.assertSimilar(game(807), [651249, 2])
  Test.assertSimilar(game(5014), [12570098])
  Test.assertSimilar(game(120000), [7200000000])
  Test.assertSimilar(game(750000), [281250000000])
  Test.assertSimilar(game(750001), [562501500001, 2])
  Test.assertSimilar(game(3000000), [4500000000000])
  Test.assertSimilar(game(3000001), [9000006000001, 2])
})

Test.describe("Random tests", function () {
  function randint(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a);
  }

  //-------------------------
  function solution140312(n) {
    var m = n * n;
    if (m % 2 === 0) return [m / 2];
    else return [m, 2];
  }
  //-------------------------

  for (var i = 0; i < 50; i++) {
    var n = randint(110, 50000);
    Test.it("Testing for : " + n,
      function () {
        Test.assertSimilar(game(n), solution140312(n), "It should work with random inputs")
      }
    )
  }
})
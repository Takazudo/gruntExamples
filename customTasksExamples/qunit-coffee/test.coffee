(($, window, document) ->

  # do something every tests' end
  QUnit.testDone ->
    # do something here
    
  test 'foobar', ->
    a = 'foobar'
    b = 'foobar'
    equal a, b, 'foobar'
    equal a, b, 'foobar'
    equal a, b, 'foobar'

) jQuery, @, @document

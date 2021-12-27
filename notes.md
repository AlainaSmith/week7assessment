array   doublerAppendTime   doublerInsertTime

tinyArray           129.367 μs     52.519 μs
smallArray          150.994 μs     68.816 μs
mediumArray         227.783 μs     270.522 μs
largeArray          785.4μs        14.31ms
extraLargeArray     15.72ms        1.935ms



In this table it is most significant to observe the functions as they scale up and not which function is the fastest at first. Because in this case, the doubleInsert time was faster than the doublerAppend time, but this changes drastically once we hit the largeArray, where the doublerAppend runtime is faster, where it remains fatser in the extraLargeArray as well.
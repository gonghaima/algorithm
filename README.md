# algorithm
implementation of algorithm rules

Binary Search (npm start || npm test)

Bubble Sort

Binary Tree
    binary search tree - for every node value in the left is smaller than the value of the node and value at the right is higher than the value of the root.


            bst.push(3);
            bst.push(2);
            bst.push(4);
            bst.push(1);
            bst.push(5);

                    3
            2.   	    4
       1.  null.       null.    5

                    3
            2.   	    4
       1.  null.       null.    5
                            null    6
                                null   7

                    3
            2.   	    4
       1.  null.       null.    5
                            4       6
                         3    null  null   7
                       2 null

                    3
            2.   	    4
       1.  null.       null.    5
                            4       6
                         3    null
                       2 null
                     null 6
                       null 7

                    3
            2.   	    4
       1.      2       3        5
                            4       6
                       null null  null   7

                    3
            2.   	    4
       1.      2       3           5
           null  2             4          6
              null 2       null null  null   7
               null 2
                null 2
                 null 2
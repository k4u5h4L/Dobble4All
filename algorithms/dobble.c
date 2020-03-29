#include <stdio.h>
#include <stdlib.h>

#define PRINT(x) printf("%d ", (x)+1)

void main() {
    int a[100][30];
    int i, j, k, r = 0, n = 7;

    // first card
    printf ("Card %2d:  ", ++r);
    for (i = 0; i <= n; i++) {
        PRINT (i);
        a[i][0] = i + 1;
    }
    printf ("\n");

    // n following cards
    for (j = 0; j < n; j++) {
        printf ("Card %2d:  ", ++r);
        PRINT (0);
        for (k = 0; k < n; k++) {
            PRINT (n+1 + n*j + k);
            a[j][k] = (n+1 + n*j + k);
        }
        printf ("\n");
    }

    // n*n following cards
    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            printf ("Card %2d:  ", ++r);
            PRINT (i+1);
            for (k = 0; k < n; k++) {
                PRINT (n+1 + n*k + (i*k+j)%n); // Good for n = prime number
            }
            printf ("\n");
        }
    }
    /*
    printf("------------------------------------------------------------------------------------\n");
    printf("This is a[][]\n");
    for (i = 0; i < 8; i++) {
        for (j = 0; i < 50; i++) {
            printf("%d  ", a[i][j]);
        }
        printf("\n");
    }
    */
}

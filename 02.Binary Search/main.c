//Binary Search
#include <stdio.h>

int main(){
        int a[] = {5,10,22,35,46,89,92,93,99,100},length,item;
        length = sizeof(a) / sizeof(a[0]);
         printf("The orginal array element are: \n");
         for (int i = 0; i < length; i++)
         {
            printf("a[%d]= %d \n",i,a[i]);
         }
         printf("What number you want to search: ");
         scanf("%d",&item);

        int left,right,middle;
        left = 0;
        right = length-1;
        
        int count= 1;
        while (left<= right)
        {
            middle = (left+right)/2;
            printf("%d middle is %d\n", count++, a[middle]);
                if (a[middle]==item)
            {
                printf("Found Element %d  at position %d", item, middle+1);
                return 0;
            }else if (a[middle] < item)
            {
                left = middle+1;
            }else{
                right = middle-1;
            }
        }
        
        printf("Item not found!");
        
    return 0;
}
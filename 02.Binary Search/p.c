#include <stdio.h>

int bs(int arr[],int item, int len){
    int start, middle , end;
    start = 0;
    end = len-1;
    
    while (start <= end)
    {
        middle = (start+end)/2;
        if (arr[middle] == item)
        {
            printf("Your item found in %d index", middle);
            return 0;
        }else if (arr[middle] < item)
        {
            start = middle+1;
        }else{
            end = middle-1;
        }
        
        
    }
    printf("item not found!\n");
}

int main(){
    int arr[] = {4,5,8,10,14,18,19,25},len;
    bs(arr,25,8);
    
    return 0;
}
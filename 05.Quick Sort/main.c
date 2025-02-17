#include <stdio.h>
#include <stdlib.h>
#include <time.h>
int partition();

void quickSort();

void printArr(int arr[], int n){
    for(int i = 0; i < n; i++)
        printf("%d ",arr[i]);
}
int main(){
    int n,i;
    // printf("Enter the size of Array: ");
    // scanf("%d",&n);
    srand(time(0));
    n = 10; 
    int a[n];
    for(i = 0; i < n; i++){
        a[i] = rand() % 100; 
    }

    for(i=0; i < n; i++){
        scanf("%d",&a[i]);
    }

    printf("The original array element are: ");
    printArr(a,n); 

    quickSort(a, 0, n-1);
    
    printf("\nAfter sorting: ");
    printArr(a,n); 
    return 0;
}
void quickSort(int arr[], int left, int right){
    if(left < right){
        int p = partition(arr, left, right);
        quickSort(arr,left,p-1);
        quickSort(arr,p+1,right);
    }
}

int partition(int arr[], int left, int right){
    int pivot, i,j;
    pivot = arr[right];
    i = (left - 1);
    for(j=left; j<= right - 1; j++){
        if(arr[j] < pivot){
            i++;
            int temp;
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    int temp = arr[i+1];
    arr[i+1] = arr[right];
    arr[right] = temp;
    return (i+1);
}
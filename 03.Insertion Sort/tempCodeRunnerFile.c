#include <stdio.h>

void insertion(int arr[], int n){
    int i, value, temp;
    for(i=1; i < n; i++){
        value = arr[i];
        temp = i;
        while(temp > 0 && arr[temp-1] > value){
            arr[temp] = arr[temp-1];
            temp--;
        }
        arr[temp] = value;
    }
    
}

void print(int arr[], int n){
    for(int i = 0; i < n; i++)
        printf("%d ",arr[i]);
}

int main(){
    int n,i;
    printf("Enter the Size of Array: ");
    scanf("%d",&n);
    
    int a[n];
    printf("Enter the %d Array Element: ",n);
    for(i=0; i < n; i++){
        scanf("%d",&a[i]);
    }

    printf("The orginal array element are: ");
    print(a,n); 

    insertion(a,n);
    
    printf("\nAfter sorting: ");
    print(a,n);
}
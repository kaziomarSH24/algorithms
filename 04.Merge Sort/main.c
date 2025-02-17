#include <stdio.h>

int merge(int arr[], int left, int mid, int right){
int i, j, k;
int size_left, size_right;

size_left = mid - left + 1;
size_right = right - mid;  

int l[size_left], r[size_right];

for( i = 0; i < size_left; i++){
    l[i] = arr[left+i];
}
for( j = 0; j < size_right; j++){
    r[j] = arr[mid+j+1];
}
l[i] = 99999;
r[j] = 99999;
i = 0;
j = 0;

for(k = left; k <= right; k++){
    if(l[i] <= r[j]){
        arr[k] = l[i];
        i++;
    }else{
        arr[k] = r[j];
        j++;
    }
}
return 0;
}
void mergeSort(int arr[], int left, int right){

    if(left < right){
        int mid;
        mid = left + (right-left) /2;
        mergeSort(arr, left, mid);
        mergeSort(arr, mid+1, right);
        merge(arr, left, mid, right);
    }
}

void print(int arr[], int n){
    for(int i = 0; i < n; i++)
        printf("%d ",arr[i]);
}
int main(){
    int n,i;
    printf("Enter the size of Array: ");
    scanf("%d",&n);
    
    int a[n];
    printf("Enter the %d Array Element: ",n);
    for(i=0; i < n; i++){
        scanf("%d",&a[i]);
    }

    printf("The orginal array element are: ");
    print(a,n); 

    mergeSort(a,0,n-1);
    printf("\n========================================");
    printf("\nAfter sorting: ");
    print(a,n); 
    printf("\n========================================");
return 0;
}
//
//  MSFilesCollection.m
//  Tutorial
//
//  Created by Miroslaw Dylag on 20/02/2014.
//  Copyright (c) 2014 MentorSoftware Ltd. All rights reserved.
//

#import "MSFilesCollection.h"
#import "MSMyCell.h"

@implementation MSFilesCollection
- (id)init {
    self = [super init];
    if (self) {
        self.myImages=[@[@"plus.png",
                         @"reorder.png",
                         @"trash.png",
                         @"key.png",
                         @"key2.png",
                         @"plus.png",
                         @"reorder.png",
                         @"trash.png",
                         @"key.png",
                         @"key2.png",
                         @"plus.png",
                         @"reorder.png",
                         @"trash.png",
                         @"key.png",
                         @"key2.png",
                         @"plus.png",
                         @"reorder.png",
                         @"trash.png",
                         @"key.png",
                         @"key2.png",
                         @"plus.png",
                         @"reorder.png",
                         @"trash.png",
                         @"key.png",
                         @"key2.png",
                         @"plus.png",
                         @"reorder.png",
                         @"trash.png",
                         @"key.png",
                         @"key2.png",
                         @"plus.png",
                         @"reorder.png",
                         @"trash.png",
                         @"key.png",
                         @"key2.png",
                         @"plus.png",
                         @"reorder.png",
                         @"trash.png",
                         @"key.png",
                         @"key2.png",
                         @"plus.png",
                         @"reorder.png",
                         @"trash.png",
                         @"key.png",
                         @"key2.png",
                         @"plus.png",
                         @"reorder.png",
                         @"trash.png",
                         @"key.png",
                         @"key2.png",
                         @"lock.png"] mutableCopy];
        // Initialize self.
    }
    return self;
}
- (NSInteger)collectionView:(UICollectionView *)collectionView numberOfItemsInSection:(NSInteger)section
{
    return self.myImages.count;
}

- (NSInteger)numberOfSectionsInCollectionView:(UICollectionView *)collectionView
{
    return 1;
}

- (UICollectionViewCell *)collectionView:(UICollectionView *)collectionView cellForItemAtIndexPath:(NSIndexPath *)indexPath
{
    MSMyCell *cell = [collectionView dequeueReusableCellWithReuseIdentifier:@"MyCell" forIndexPath:indexPath];
    long row = [indexPath row];
    UIImage *   image = [UIImage imageNamed:_myImages[row]];
    cell.myImage.image=image;
    return cell;
}

@end

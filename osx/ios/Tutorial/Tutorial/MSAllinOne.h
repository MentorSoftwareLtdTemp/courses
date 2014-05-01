//
//  MSAllinOne.h
//  Tutorial
//
//  Created by Miroslaw Dylag on 20/02/2014.
//  Copyright (c) 2014 MentorSoftware Ltd. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "MSMyCell.h"
#import "MSFilesCollection.h"

@interface MSAllinOne : UITableViewController
@property (weak, nonatomic) IBOutlet UICollectionView *collectionFiles;
@property MSFilesCollection *msFilesCollection;

@end

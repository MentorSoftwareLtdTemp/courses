//
//  MSDetailViewController.h
//  Tutorial
//
//  Created by Miroslaw Dylag on 22/01/2014.
//  Copyright (c) 2014 MentorSoftware Ltd. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface MSDetailViewController : UIViewController

@property (strong, nonatomic) id detailItem;

@property (weak, nonatomic) IBOutlet UILabel *detailDescriptionLabel;
@end

//
//  MSViewControllerEffects.m
//  Tutorial
//
//  Created by Miroslaw Dylag on 18/02/2014.
//  Copyright (c) 2014 MentorSoftware Ltd. All rights reserved.
//

#import "MSViewControllerEffects.h"

@interface MSViewControllerEffects ()

@end

@implementation MSViewControllerEffects



- (void)viewDidLoad
{
    [super viewDidLoad];
    // Remove this later
    self.view.backgroundColor = [UIColor clearColor];
    [self.navigationController.toolbar setBackgroundColor:[UIColor clearColor]];
    
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end

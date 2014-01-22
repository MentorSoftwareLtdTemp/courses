//
//  MSMasterViewController.h
//  Tutorial
//
//  Created by Miroslaw Dylag on 22/01/2014.
//  Copyright (c) 2014 MentorSoftware Ltd. All rights reserved.
//

#import <UIKit/UIKit.h>

#import <CoreData/CoreData.h>

@interface MSMasterViewController : UITableViewController <NSFetchedResultsControllerDelegate>

@property (strong, nonatomic) NSFetchedResultsController *fetchedResultsController;
@property (strong, nonatomic) NSManagedObjectContext *managedObjectContext;

@end

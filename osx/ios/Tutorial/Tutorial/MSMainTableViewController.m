//
//  MSMainTableViewController.m
//  Tutorial
//
//  Created by Miroslaw Dylag on 22/01/2014.
//  Copyright (c) 2014 MentorSoftware Ltd. All rights reserved.
//

#import "MSMainTableViewController.h"
#import "MSPascodeViewController.h"
#import "Lockbox.h"

@interface MSMainTableViewController ()
    @property (nonatomic, strong) NSMutableIndexSet *optionIndices;
    @property (strong, nonatomic) void(^tapHandler)();
    -(IBAction)buttonTapped;
@end

@implementation MSMainTableViewController

- (IBAction)showMenu:(id)sender {
    NSArray *images = @[
                        [UIImage imageNamed:@"key"],
                        [UIImage imageNamed:@"plus"]];

    NSArray *colors = @[
//                        [UIColor clearColor]];
                    [UIColor colorWithRed:250/255.f green:105/255.f blue:0/255.f alpha:1],
                    [UIColor colorWithRed:250/255.f green:105/255.f blue:0/255.f alpha:1]];


    RNFrostedSidebar *callout = [[RNFrostedSidebar alloc] initWithImages:images selectedIndices:Nil borderColors:colors];

    //RNFrostedSidebar *callout = [[RNFrostedSidebar alloc] initWithImages:images];
    callout.delegate = self;
    callout.itemBackgroundColor=[UIColor colorWithWhite:1.0 alpha:0.00];
    //    callout.showFromRight = YES;
    [callout show];
  
    
}


- (id)initWithStyle:(UITableViewStyle)style
{
    self = [super initWithStyle:style];
    if (self) {
        // Custom initialization
    }
    return self;
}

- (void)viewDidLoad
{
    [super viewDidLoad];
    UIBarButtonItem *itemAdd = [[UIBarButtonItem alloc] initWithBarButtonSystemItem:UIBarButtonSystemItemAdd target:self action:@selector(showMenuSheetAdd:)];
    [self setToolbarItems:[NSArray arrayWithObjects:itemAdd, nil] animated: TRUE];
    self.wantsFullScreenLayout = YES;
    self.optionIndices = [NSMutableIndexSet indexSetWithIndex:1];
   

    // Uncomment the following line to preserve selection between presentations.
    // self.clearsSelectionOnViewWillAppear = NO;
 
    // Uncomment the following line to display an Edit button in the navigation bar for this view controller.
    // self.navigationItem.rightBarButtonItem = self.editButtonItem;
}

#pragma mark - RNFrostedSidebarDelegate

- (void)sidebar:(RNFrostedSidebar *)sidebar didTapItemAtIndex:(NSUInteger)index {
    NSLog(@"Tapped item at index %i",index);
    if (index == 0) {
        [sidebar dismissAnimated:YES completion:^(BOOL finished) {
            if (finished) {
                UIStoryboard *storyboard = [UIStoryboard storyboardWithName:@"Main" bundle:nil];
                MSPascodeViewController *viewController = (MSPascodeViewController *)[storyboard instantiateViewControllerWithIdentifier:@"MSPasscodeViewController"];
                self.navigationController.modalPresentationStyle = UIModalPresentationFormSheet;
                viewController.mode=MSPasscodeModeChange;
                [self.navigationController pushViewController:viewController animated:YES ];
            }
        }];

    }
    //}
}

- (void)sidebar:(RNFrostedSidebar *)sidebar didEnable:(BOOL)itemEnabled itemAtIndex:(NSUInteger)index {
    if (itemEnabled) {
        [self.optionIndices addIndex:index];
    }
    else {
        [self.optionIndices removeIndex:index];
    }
}



- (void)viewDidAppear:(BOOL)animated
{
    [super viewDidAppear:animated];
    //[self.navigationController.toolbar setBackgroundColor:[UIColor colorWithWhite:1.0 alpha:0.1f]];
    self.navigationController.toolbar.barStyle=UIBarStyleDefault;
    [self.navigationController.toolbar setBackgroundColor:[UIColor clearColor]];
    //[self.navigationController.toolbar setTranslucent:YES];
    [self.navigationController.toolbar setAlpha:0.1f];
    self.navigationController.toolbar.barTintColor = [UIColor colorWithWhite:1.0 alpha:0.1f];

    [self.navigationController setToolbarHidden:NO animated:TRUE];
    
    
}


- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

#pragma mark - Table view data source

- (NSInteger)numberOfSectionsInTableView:(UITableView *)tableView
{
//#warning Potentially incomplete method implementation.
    // Return the number of sections.
    return 1;
}

- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section
{
    // Return the number of rows in the section.
    return 10;
}

- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath
{
    static NSString *CellIdentifier = @"CellPasscode";
    UITableViewCell *cell = [super tableView:tableView cellForRowAtIndexPath:indexPath];
    //cell.backgroundColor = [UIColor clearColor];
    return cell;
}

/*
// Override to support conditional editing of the table view.
- (BOOL)tableView:(UITableView *)tableView canEditRowAtIndexPath:(NSIndexPath *)indexPath
{
    // Return NO if you do not want the specified item to be editable.
    return YES;
}
*/

/*
// Override to support editing the table view.
- (void)tableView:(UITableView *)tableView commitEditingStyle:(UITableViewCellEditingStyle)editingStyle forRowAtIndexPath:(NSIndexPath *)indexPath
{
    if (editingStyle == UITableViewCellEditingStyleDelete) {
        // Delete the row from the data source
        [tableView deleteRowsAtIndexPaths:@[indexPath] withRowAnimation:UITableViewRowAnimationFade];
    }   
    else if (editingStyle == UITableViewCellEditingStyleInsert) {
        // Create a new instance of the appropriate class, insert it into the array, and add a new row to the table view
    }   
}
*/

/*
// Override to support rearranging the table view.
- (void)tableView:(UITableView *)tableView moveRowAtIndexPath:(NSIndexPath *)fromIndexPath toIndexPath:(NSIndexPath *)toIndexPath
{
}
*/

/*
// Override to support conditional rearranging of the table view.
- (BOOL)tableView:(UITableView *)tableView canMoveRowAtIndexPath:(NSIndexPath *)indexPath
{
    // Return NO if you do not want the item to be re-orderable.
    return YES;
}
*/


#pragma mark - Table view delegate

// In a xib-based application, navigation from a table can be handled in -tableView:didSelectRowAtIndexPath:
- (void)tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath
{
    // Navigation logic may go here, for example:
    // Create the next view controller.
    //<#DetailViewController#> *detailViewController = [[<#DetailViewController#> alloc] initWithNibName:@"<#Nib name#>" bundle:nil];

    // Pass the selected object to the new view controller.
    
    // Push the view controller.
    //[self.navigationController pushViewController:detailViewController animated:YES];
    if (indexPath.row==7)
    {
        //check if the
        //
        UIStoryboard *storyboard = [UIStoryboard storyboardWithName:@"Main" bundle:nil];
        MSPascodeViewController *viewController = (MSPascodeViewController *)[storyboard instantiateViewControllerWithIdentifier:@"MSPasscodeViewController"];
        self.navigationController.modalPresentationStyle = UIModalPresentationFormSheet;
        self.navigationController.navigationBar.barStyle = UIBarStyleBlack;
        [self.navigationController pushViewController:viewController animated:YES ];

        //[self presentViewController:viewController animated:YES completion:nil];
        //MSPascodeViewController *passcodeViewController =
        NSLog(@"Selected");
    }
    else if (indexPath.row==8)
    {
        NSString * p = [Lockbox stringForKey:@"passcode"];
        NSLog(@"%@",p);
        [Lockbox setString:nil forKey:@"passcode"];
        p = [Lockbox stringForKey:@"passcode"];
        NSLog(@"%@",p);
    }
}
 


@end

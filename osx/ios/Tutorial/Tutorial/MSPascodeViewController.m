//
//  MSPascodeViewController.m
//  Tutorial
//
//  Created by Miroslaw Dylag on 17/01/2014.
//  Copyright (c) 2014 Miroslaw Dylag. All rights reserved.
//

#import "MSPascodeViewController.h"
#import "MSKeyChain.h"
#import "MSUtil.h"

NSString *const KEY_PASSCODE=@"passcode";

enum MSPasscodeStep {
    MSPasscodeStepEnter=1,
    MSPasscodeStepEnterError,
    MSPasscodeStepSet,
    MSPasscodeStepSetError,
    MSPasscodeStepSetVerify,
    MSPasscodeStepVerifyError,
    MSPasscodeStepEnterOld,
    MSPasscodeStepDone
};

@interface MSPascodeViewController ()
{
    NSString *passcode;
    NSString *oldPasscode;
    //enum MSPasscodeMode mode;
    enum MSPasscodeStep msPasscodeStep;
    
}
@end

@implementation MSPascodeViewController
@synthesize mode;

- (void)viewDidLoad
{
    [Lockbox dateForKey:@"passcode"];
    [super viewDidLoad];
    [self setViewMode];
    self.navigationItem.leftBarButtonItems=Nil;

    self.passcodeField.borderStyle = UITextBorderStyleRoundedRect;
    [self.passcodeField becomeFirstResponder];



    //self.navigationItem.title=@"Passcode";
    NSString *title=@"Done";
    if (mode==MSPasscodeModeSet)
    {
        title=@"Next";
        self.navigationItem.title=@"Set passcode";
        [self dissableLeftBarButtonItem];
        msPasscodeStep = MSPasscodeStepSet;


    }
    else if (mode==MSPasscodeModeEnter)
    {
        self.navigationItem.title=@"Enter passcode";
        [self dissableLeftBarButtonItem];
        msPasscodeStep = MSPasscodeStepEnter;

    }
    else
    {
        title=@"Next";
        self.navigationItem.title=@"Enter old passcode";
        msPasscodeStep = MSPasscodeStepEnterOld;
    }
    UIBarButtonItem *anotherButton = [[UIBarButtonItem alloc] initWithTitle:title style:UIBarButtonItemStyleDone target:self action:@selector(verifyPasscode:)];
    self.navigationItem.rightBarButtonItem = anotherButton;
    self.navigationItem.rightBarButtonItem.enabled=NO;
    
    self.passcodeField.delegate=self;
    

    /*UIToolbar* numberToolbar = [[UIToolbar alloc]initWithFrame:CGRectMake(0, 0, 320, 50)];
    numberToolbar.barStyle = UIBarStyleBlackTranslucent;
    numberToolbar.items = [NSArray arrayWithObjects:
                           [[UIBarButtonItem alloc]initWithBarButtonSystemItem:UIBarButtonSystemItemFlexibleSpace target:nil action:nil],
                           [[UIBarButtonItem alloc]initWithTitle:title style:UIBarButtonItemStyleDone target:self action:@selector(doneWithNumberPad)],
                           nil];
    [numberToolbar sizeToFit];
    self.passcodeField.inputAccessoryView = numberToolbar;*/


}
-(void) dissableLeftBarButtonItem
{
    UIButton *btn= [UIButton buttonWithType:UIButtonTypeCustom];
    self.navigationItem.leftBarButtonItem=Nil;
    [self.navigationItem setLeftBarButtonItem:[[UIBarButtonItem alloc] initWithCustomView:btn]];

}
-(void) setViewMode
{
    passcode = [Lockbox stringForKey:@"passcode"];
    if (self->mode != MSPasscodeModeChange)
    {
        if (passcode!=Nil)
        {
            self->mode = MSPasscodeModeEnter;
        }
        else
        {
            self->mode=MSPasscodeModeSet;
        }
    }
}


- (IBAction)verifyPasscode:(id)sender {
    if ([self.passcodeField.text length] < 4)
    {
        self.errorField.text=@"Passcode must be 4 digits.";
        return;
    }
    switch (mode) {
        case MSPasscodeModeSet:
        {
            if (msPasscodeStep==MSPasscodeStepSet)
            {
                passcode=self.passcodeField.text;
                self.passcodeField.text=Nil;
                self.navigationItem.title=@"Re-enter passcode";
                self.navigationItem.rightBarButtonItem.title=@"Done";
                self.navigationItem.rightBarButtonItem.enabled=NO;
                msPasscodeStep=MSPasscodeStepSetVerify;

            }
            else if (msPasscodeStep==MSPasscodeStepSetVerify)
            {
                if ([passcode localizedCompare:self.passcodeField.text]==NSOrderedSame)
                {
                    //save passcode in keychain and close the window
                    [Lockbox setString:passcode forKey:@"passcode"];
                    //close the window
                    [self.navigationController popViewControllerAnimated:TRUE];
                    
                }
                else
                {
                    self.errorField.text=@"Passcode did not match. Try again.";
                    passcode=Nil;
                    self.passcodeField.text=Nil;
                    self.navigationItem.title=@"Eenter passcode";
                    msPasscodeStep=MSPasscodeStepSet;
                    //reset passcode
                }

                
            }
          
            break;
        }
        case MSPasscodeModeEnter:
        {
            if ([passcode localizedCompare:self.passcodeField.text]==NSOrderedSame)
            {
                [self.navigationController popViewControllerAnimated:TRUE];
            }
            else
            {
                self.errorField.text=@"Wrong passcode.";
                self.passcodeField.text=Nil;
            }
            break;
        }
        case MSPasscodeModeChange:
        {
            //enter old passcode
            if (msPasscodeStep==MSPasscodeStepEnterOld)
            {
                if ([passcode localizedCompare:self.passcodeField.text]==NSOrderedSame)
                {
                    //remember old passcode and set new
                    oldPasscode = self.passcodeField.text;
                    mode=MSPasscodeModeSet;
                    msPasscodeStep=MSPasscodeStepSet;
                    self.navigationItem.title=@"Set passcode";
                    [self dissableLeftBarButtonItem];
                    self.passcodeField.text=Nil;

                    
                }
                //eror
                else
                {
                    self.errorField.text=@"Wrong passcode.";
                    oldPasscode = nil;
                    self.passcodeField.text=Nil;
                }
                
            }
            break;
        }
        default:
            break;
    }
    
}

-(void)showStep
{
    
}

- (void)textFieldDidEndEditing:(UITextField *)textField
{
    
}

- (BOOL)textField:(UITextField *)textField shouldChangeCharactersInRange:(NSRange)range replacementString:(NSString *)string {
    if ([textField.text length] > 3) {
        textField.text = [textField.text substringToIndex:3];
        return NO;
    }
    else if ([textField.text length]==3)
    {
        self.navigationItem.rightBarButtonItem.enabled=YES;
    }
    else
    {
        self.navigationItem.rightBarButtonItem.enabled=NO;
    }
    return YES;
}




-(void)viewWillAppear:(BOOL)animated
{
    //self.navigationItem.title = @"Enter Passcode";

}


- (void)doneWithNumberPad
{
}

#pragma mark - Table view data source

/*- (NSInteger)numberOfSectionsInTableView:(UITableView *)tableView
{
#warning Potentially incomplete method implementation.
    // Return the number of sections.
    return 0;
}

- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section
{
#warning Incomplete method implementation.
    // Return the number of rows in the section.
    return 0;
}

- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath
{
    static NSString *CellIdentifier = @"Cell";
    UITableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:CellIdentifier forIndexPath:indexPath];
    
    // Configure the cell...
    
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

/*
#pragma mark - Navigation

// In a story board-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender
{
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}

 */

@end
